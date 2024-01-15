import Card from "react-bootstrap/Card";
import "./styles.css";

export default function Banner() {
  return (
    <div className="m-5">
      <Card className="banner_img border border-dark">
        <Card.Body className="banner_text display-6 text-center">
          PASIG CITY LEARNING AND RESOURCE CENTER
        </Card.Body>
      </Card>
    </div>
  );
}
