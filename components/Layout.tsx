import Navbar from "./navBar/NavBar";
import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

export default function Layout(props: { children: React.ReactNode; }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" style={{padding:0}}>
        <Navbar />
        <div>{props.children}</div>
      </Container>
    </React.Fragment>
  );
}

