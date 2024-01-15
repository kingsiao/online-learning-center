import React from "react";
import Topbar from "@/components/Topbar";
import Banner from "@/components/Banner";
import Cards from "@/components/Cards";
import ProductCard from "@/components/ProductCard";
import "bootstrap/dist/css/bootstrap.css";

export default function Home() {
  return (
    <>
      <Topbar></Topbar>
      <Banner></Banner>
      <Cards></Cards>
      <ProductCard></ProductCard>
    </>
  );
}
