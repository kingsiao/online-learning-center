import React, { useState, useEffect } from "react";
import { Card, Button, Col, Row, Spinner } from "react-bootstrap";
import "./styles.css";

function ProductCard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/search");
      const data = await response.json();
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // Set loading to false regardless of success or error
    }
  };

  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();
  }, []);

  return (
    <div className="cards-container mb-5">
      {loading ? (
        // Display a loading spinner while fetching data
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        // Display product cards when data is loaded
        <Row xs={1} md={2} lg={4} className="g-4">
          {products.books && products.books.length > 0 ? (
            products.books.slice(0, 4).map((product) => (
              <Col key={product.id}>
                <Card
                  key={product.id}
                  style={{ width: "250px" }}
                  className="h-100 d-flex flex-column"
                >
                  <Card.Body className="d-flex flex-column flex-grow-1">
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.author}</Card.Text>
                    <Button
                      variant="primary"
                      className="mt-auto align-self-start w-100"
                    >
                      Go
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p>No products available</p>
          )}
        </Row>
      )}
    </div>
  );
}

export default ProductCard;
