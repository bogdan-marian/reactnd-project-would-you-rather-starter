import React, { Component } from 'react'
import {
  ProgressBar,
  Row,
  Col,
  Badge,
  Card,
} from 'react-bootstrap'

class OptionResult extends Component {
  render() {
    const { question, authedUser, option } = this.props;
    const badge = option.votes.includes(authedUser)
      ? <Badge>Your vote</Badge>
      : <></>
    const votesThis = option.votes.length
    const votesOne = question.optionOne.votes.length
    const votesTwo = question.optionTwo.votes.length
    const all = votesOne + votesTwo

    const percent = Math.floor(votesThis / all * 100)
    const progressInstance = <ProgressBar now={percent} label={`${percent}%`} />;

    return (
      <Card>
        <Card.Body>
          <Row>{badge}</Row>
          <Row>
            Would you rather {option.text}
          </Row>
          <Row className="justify-content-md-center">
            <Col>{progressInstance}</Col>
          </Row >
          <Row className="justify-content-md-center">  {votesThis} out of {all}</Row>
        </Card.Body>
      </Card>
    )
  }
}
export default OptionResult