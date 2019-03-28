export function formatQuestion (question, author) {
  const { id, optionOne, optionTwo, timestamp } = question
  const { name, avatarURL } = author

  return {
    name,
    id,
    timestamp,
    optionOne,
    optionTwo,
    allVotes: optionOne.votes.concat(optionTwo.votes), 
    avatar: avatarURL,
  }
}

export const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100) // fake async
  }
}