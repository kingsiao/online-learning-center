import React from "react";
import Container from "react-bootstrap/Container";
import Topbar from "@/components/Topbar";
import { BreadcrumbAboutUs } from "@/components/Breadcrumbs";
import Section from "@/components/Section";

const goalsData = [
  "Use technology to provide the most appropriate information delivery system",
  "Use technology to control cost and improve the efficiency of library operations",
  "Maintain flexibility to adopt new and changing technology to meet the public's needs.",
  "Evaluate emerging technology for effective responsiveness to the library's needs.",
  "Use technology to connect to relevant sources outside the library.",
  "Train library staff on how to use technology to retrieve the information needed.",
  "Maintain LCC staff awareness of new technology via training and technical manuals etc.",
];

const factsData = [
  "The member libraries serve over 1.3 million card holders in the Central Ohio area.",
  "There are over 5 million items and over 1 million unique titles available to patrons.",
  "The member libraries circulate over 26 million items each year.",
  "Over 2.1 million items are shared to fill requests between library systems each year.",
];

const About = () => (
  <Container>
    <Topbar />
    <div>
      <BreadcrumbAboutUs />
      <Section title="Goals" items={goalsData} />
      <Section title="Facts" items={factsData} />
    </div>
  </Container>
);

export default About;
