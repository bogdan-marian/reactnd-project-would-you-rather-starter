import React, { Component } from 'react'
import { connect } from "react-redux";
import LaderItem from './LaderItem'
import { Container } from "react-bootstrap";
import styles from "./Question.module.css";

class Lader extends Component {
  constructor(props) {
    super(props)
    this.myMap = new Map()
    this.answerdMap = new Map()
    this.createdMap = new Map()
    this.avatarMap = new Map()
    this.orderUsers = this.orderUsers.bind(this)
  }

  orderUsers(a, b) {
    let countA = this.myMap.get(a)
    let countB = this.myMap.get(b)
    if (countA < countB) {
      return 1
    }
    if (countA > countB) {
      return -1
    }
    return 0
  }


  render() {
    const { users, questions } = this.props
    const { myMap, answerdMap, createdMap , avatarMap} = this
    let userKeys = Object.keys(users)
    let qKeys = Object.keys(questions)

    for (var u = 0; u < userKeys.length; u++) {
      let userKey = userKeys[u]

      if (!myMap.has(userKey)) {
        myMap.set(userKey, 0)
      }
      if (!answerdMap.has(userKey)) {
        answerdMap.set(userKey, 0)
      }
      if (!createdMap.has(userKey)) {
        createdMap.set(userKey, 0)
      }
      if (!avatarMap.has(userKey)){
        avatarMap.set(userKey, users[userKey].avatarURL)
      }

      for (var q = 0; q < qKeys.length; q++) {
        let questionKey = qKeys[q]
        let question = questions[questionKey]

        let allVotes = question.optionOne.votes.concat(question.optionTwo.votes)

        if (allVotes.includes(userKey)) {
          let count = myMap.get(userKey) + 1
          myMap.set(userKey, count)

          let aCount = answerdMap.get(userKey) + 1
          answerdMap.set(userKey, aCount)
        }

        if (question.author === userKey) {
          let sCount = myMap.get(userKey) + 1
          myMap.set(userKey, sCount)

          let cCount = createdMap.get(userKey) + 1
          createdMap.set(userKey, cCount)
        }
      }
    }
    console.log("avatar map")
    console.log(avatarMap)
    userKeys.sort(this.orderUsers)

    this.rank = new Map()

    userKeys.map((item, key) => {
      this.rank.set(item, key)
    })

    return (
      <Container className={styles.questionWidth}>
        <p></p>
        {
          userKeys.map((item, key) => (

            <LaderItem
              user={users[item]}
              key={key}
              rank={key}
              score={myMap.get(item)}
              answerd={answerdMap.get(item)}
              created={createdMap.get(item)}
              avatar={avatarMap.get(item)} />
          ))
        }
      </Container>
    )
  }
}

function mapStateToProps({ questions, users, authedUser }) {
  return {
    questionIds: Object.keys(questions),
    questions: questions,
    users: users,
    authedUser: authedUser
  };
}

export default connect(mapStateToProps)(Lader);
