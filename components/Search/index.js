import React, { useState } from "react";
import { Container, Button, Form, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

export default function SearchBar() {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const [noMatches, setNoMatches] = useState(false);

  const fetchData = async () => {
    const response = await fetch(
      `http://localhost:8080/api/search?query=${value}`
    );
    const result = await response.json();
    setData(result);
    setNoMatches(result.books && result.books.length === 0);
  };

  const handleSearch = () => {
    fetchData();
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    setNoMatches(false); // Reset noMatches when the input changes
    console.log(noMatches);
  };

  return (
    <Container>
      <div>
        <div>
          <Form className="mb-4">
            <Form.Group className="search-container">
              <Form.Control
                className="ml-r3"
                type="text"
                onChange={handleChange}
                value={value}
                placeholder="Search"
              />
              <Button
                className="mx-2"
                onClick={handleSearch}
                variant="outline-secondary"
              >
                Submit
              </Button>
            </Form.Group>
          </Form>
        </div>

        <div>
          {noMatches ? (
            <div className="mt-5">
              <p>Matches not found</p>
            </div>
          ) : (
            value &&
            data.books
              ?.filter(
                (item) =>
                  item.title.toLowerCase().startsWith(value.toLowerCase()) &&
                  item.title.toLowerCase() !== value.toLowerCase()
              )
              .slice(0, 5)
              .map((item) => (
                <Card className="mb-3" style={{ width: "30rem" }} key={item.id}>
                  <Card.Body>
                    <p>{item.title}</p>
                    <p style={{ marginTop: "-15px" }}>{item.subject}</p>
                    <p style={{ marginTop: "-15px" }}>by {item.author}</p>
                    <p style={{ marginTop: "-15px" }}>
                      {item.subject}, {new Date(item.created_at).getFullYear()}
                    </p>
                    <p style={{ marginTop: "-15px" }}>{item.subject}</p>
                  </Card.Body>
                </Card>
              ))
          )}
        </div>
      </div>
    </Container>
  );
}
