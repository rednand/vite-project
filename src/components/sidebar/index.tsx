import "react-bootstrap-drawer/lib/style.css";
import React, { useState } from "react";
import { Col, Collapse, Container, Row } from "react-bootstrap";
import { Drawer } from "react-bootstrap-drawer";

const Sidebar = (props: any) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(!open);

  return (
    <Drawer {...props}>
      <Drawer.Toggle onClick={handleToggle} />
      <Collapse in={open}>
        <Drawer.Overflow>
          <Drawer.ToC>
            <Drawer.Nav>
              <Drawer.Item href="/">Home</Drawer.Item>
              <Drawer.Header href="/tabela">Tabela</Drawer.Header>
            </Drawer.Nav>
          </Drawer.ToC>
        </Drawer.Overflow>
      </Collapse>
    </Drawer>
  );
};

export const Application = (props: any) => {
  return (
    <Container style={{ position: "fixed", top: "56px" }}>
      <Row>
        <Col as={Sidebar} xs={12} md={3} lg={2} />
        <Col xs={12} md={9} lg={10}>
          {props.children}
        </Col>
      </Row>
    </Container>
  );
};
