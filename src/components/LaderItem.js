import React, { Component } from "react";
import { Card, Row, Col, Table, Badge, Image } from "react-bootstrap";
import styles from "./Question.module.css";

class LaderItem extends Component {
  render() {
    const { user, rank, score, answerd, created, avatar } = this.props
    console.log("Lader item props")
    console.log(this.props)
    let rankMessage
    if (rank === 0) {
      rankMessage = 'is the champion'
    } else if (rank === 1) {
      rankMessage = "is second"
    } else if (rank === 2) {
      rankMessage = "is third"
    } else {
      rankMessage = "current rank = " + rank
    }

    return (

      <Row>
        <Col xs={12}>
          <p></p>
          <Card>
            <Card.Header>    {user.name}: {rankMessage}   </Card.Header>
            <Card.Body>
              <Row>
                <Col xs={4}>
                  <Image
                    src={avatar}
                    roundedCircle
                    className={styles.avatarWidth}
                  />
                </Col>
                <Col xs={5}>
                  <Card.Title>
                    {user.name}: {rankMessage}
                  </Card.Title>

                  <Table hover size="sm">

                    <tbody>
                      <tr>
                        <td>Answerd Questions</td>
                        <td>{answerd}</td>
                      </tr>
                      <tr>
                        <td>Created Questions</td>
                        <td>{created}</td>
                      </tr>

                    </tbody>
                  </Table>
                </Col>
                <Col xs={3}>
                  <Card.Title>
                    Score
                  </Card.Title>
                  <Card.Title>
                    <Badge variant="secondary">{score}</Badge>
                  </Card.Title>
                </Col>

              </Row>

            </Card.Body>
          </Card>
        </Col>
      </Row>
    )
  }
}
export default LaderItem
