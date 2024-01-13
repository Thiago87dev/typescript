type VerifyUserFn = (user: User, sentValue: User) => boolean
type User = { username: string; password: string }

const verifyUserFn: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  )
}

const bdUser = { username: 'Thiago', password: '123456' }
const sentUser = { username: 'Thiago', password: '123456' }
const loggedn = verifyUserFn(bdUser, sentUser)

console.log(loggedn)
