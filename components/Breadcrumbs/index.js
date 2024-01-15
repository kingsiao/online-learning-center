// Breadcrumbs.js
import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import "./styles.css";

function BreadcrumbComponent({ title }) {
  return (
    <Breadcrumb>
      <Breadcrumb.Item className="home-link" href="/">
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item active>{title}</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export const BreadcrumbAboutUs = () => <BreadcrumbComponent title="About Us" />;

export const BreadcrumbMember = () => (
  <BreadcrumbComponent title="Member Libraries" />
);

export const BreadcrumbServices = () => (
  <BreadcrumbComponent title="Services" />
);

export const BreadcrumbContactUs = () => (
  <BreadcrumbComponent title="Contact Us" />
);

export const BreadcrumbSearch = () => <BreadcrumbComponent title="Search" />;
