import Container from "react-bootstrap/Container";
import Topbar from "@/components/Topbar";
import { BreadcrumbMember } from "@/components/Breadcrumbs";

export default function Member() {
  return (
    <Container>
      <Topbar></Topbar>
      <div>
        <BreadcrumbMember></BreadcrumbMember>
      </div>
    </Container>
  );
}
