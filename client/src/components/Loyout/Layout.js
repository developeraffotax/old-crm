import React from "react";
import { Helmet } from "react-helmet";
import Sidebar from "./Sidebar";

export default function Layout({
  children,
  title,
  description,
  keywords,
  author,
}) {
  return (
    <div className="layout-container">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <div className="flex flex-row">
        <Sidebar />
        <main style={{ minHeight: "100vh" }} className="layout-children">
          {children}
        </main>
      </div>
    </div>
  );
}

// Default Props

Layout.defaultProps = {
  title: "CRM",
  description:
    "Mern Stack Project with React JS, Node JS, Express JS, MongoDB, BootStrap , CSS3, HTML5, JavaScript, & Tailwind CSS ",
  keywords: "Affotax CRM",
  author: "M Salman",
};
