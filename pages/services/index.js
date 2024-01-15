import Topbar from "@/components/Topbar";
import Container from "react-bootstrap/Container";
import { BreadcrumbServices } from "@/components/Breadcrumbs";

export default function Services() {
  return (
    <Container>
      <Topbar></Topbar>
      <div>
        <BreadcrumbServices></BreadcrumbServices>
        {/* <div className="d-flex flex-column">
                    <a className="text-black mt-1" href="#">e-Resources</a>
                    <a className="text-black mt-1" href="#">L-Vira</a>
                    <a className="text-black mt-1" href="#">Online Repositories</a>
                    <a className="text-black mt-1" href="#">Makinig at Matuto</a>
                    <a className="text-black mt-1" href="#">Arts and Crafts</a>
                    <a className="text-black mt-1" href="#">Buhay at Aklat</a>
                    <a className="text-black mt-1" href="#">Caygandang Alamin</a>
                </div> */}
      </div>
    </Container>
  );
}
