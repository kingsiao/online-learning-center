import Topbar from "@/components/Topbar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BreadcrumbContactUs } from "@/components/Breadcrumbs";

export default function Contact() {
  return (
    <Container>
      <Topbar></Topbar>
      <div>
        <BreadcrumbContactUs></BreadcrumbContactUs>
        <div>
          <Row>
            <Col className="p-5">
              <h4>Get in touch with us!</h4>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control type="text" placeholder="Name*" />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control type="email" placeholder="Email*" />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control as="textarea" placeholder="Message*" rows={5} />
                </Form.Group>

                <div className="d-grid gap-2">
                  <Button variant="outline-dark">SEND</Button>
                </div>
              </Form>
              <small>
                This site is protected by reCAPTCHA and the Google Privacy
                policy and Terms of Service apply.
              </small>
            </Col>

            <Col>
              <div style={{ marginTop: "80px" }}>
                <p>Pasig City, National Capital Region, Philippines</p>

                <p style={{ marginBottom: "1px" }}>(012) 234 09090</p>
                <p>+(639) 123 234 9509</p>

                <h3>Hours</h3>

                <p style={{ marginBottom: "1px" }}>
                  <b>Monday to Friday</b>
                </p>
                <p>7:30AM to 6:00PM</p>

                <p style={{ marginBottom: "1px" }}>
                  <b>Saturday</b>
                </p>
                <p>8:00AM to 5:00PM</p>

                <p style={{ marginBottom: "1px" }}>
                  <b>Sunday</b>
                </p>
                <p>Closed</p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
}
