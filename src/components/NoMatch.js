import React, { Component } from "react"
import {Card, Row, Col, Image, Container, Button } from "react-bootstrap";
import styles from "./Question.module.css";

class NoMatch extends Component {
  render() {
    return (
      <Container className={styles.questionWidth}>
        <p></p>
        <Card>
          <Card.Header>Ups: 404</Card.Header>
          <Card.Body>
            <Row>
              <Col xs={4}>

              </Col>
              <Col xs={8}>
                <Card.Title>This is not the page or the question you are looking for </Card.Title>

              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    )
  }
}

export default (NoMatch)