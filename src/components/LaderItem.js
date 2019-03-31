import React, { Component } from "react";
import { Card, Row, Col } from "react-bootstrap";

class LaderItem extends Component {
  render() {
    const { user, rank, score, answerd, created } = this.props
    console.log("Lader item props")
    console.log(this.props)
    let rankMessage
    if (rank === 0){
      rankMessage = 'is the champion'
    }else if(rank === 1){
      rankMessage = "is second"
    }else if (rank ===2){
      rankMessage = "is third"
    }else{
      rankMessage = "current rank = " + rank
    }

    return (

      <Row>
        <Col xs={10}>
          <p></p>
          <Card>
            <Card.Body>
              <Card.Title>
                {user.name}: {rankMessage} / {score} / {answerd} / {created}
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    )
  }
}
export default LaderItem
