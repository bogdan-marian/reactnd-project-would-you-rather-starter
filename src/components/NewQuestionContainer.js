import React, { Component } from "react";
import { connect } from "react-redux";
import QuestionPreview from "./QuestionPreview";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import styles from "./Question.module.css";


class NewQuestionContainer extends Component {
  render() {
    console.log(this.props);
    return (
      <Container className={styles.questionWidth}>
        <Row>
          <Col>
            <Tabs defaultActiveKey="Unanswerd" id="uncontrolled-tab-example">
              <Tab eventKey="Unanswerd" title="Unanswerd Questions">
                {this.props.questionIds.map(id => (
                  <QuestionPreview key={id} id={id} />
                ))}
              </Tab>
              <Tab eventKey="Answerd" title="Answerd Questions">
                Sime other text
              </Tab>
            </Tabs>
          </Col>
        </Row>

      </Container>
    );
  }
}

function mapStateToProps({ questions }) {
  return {
    questionIds: Object.keys(questions)
  };
}

export default connect(mapStateToProps)(NewQuestionContainer);
