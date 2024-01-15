import Topbar from "@/components/Topbar";
import SearchBar from "@/components/Search";
import Container from "react-bootstrap/Container";
import { BreadcrumbSearch } from "@/components/Breadcrumbs";

export default function Search() {
  return (
    <Container>
      <Topbar></Topbar>
      <BreadcrumbSearch></BreadcrumbSearch>
      <SearchBar></SearchBar>
    </Container>
  );
}
