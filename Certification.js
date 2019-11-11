const users = [
  {
    firstName: 'Tony',
    email: 'tony@stark.com',
    password: 'iamironman'
  },
  {
    firstName: 'Steve',
    email: 'captain@hotmail.com',
    password: 'icandothisallday'
  },
  {
    firstName: 'Peter',
    email: 'peter@parker.com',
    password: 'enajyram'
  },
  {
    firstName: 'Natasha',
    email: 'natasha@gamil.com',
    password: '*parol#@$!'
  },
  {
    firstName: 'Nick',
    email: 'nick@shield.com',
    password: 'password'
  }
]

function certification(options) {
  let check = ''
  for (let i = 0; i < users.length; i++) {
    if (options.email === users[i].email && options.password === users[i].password) {
      check += users[i].firstName
      return users[i].firstName
    }
  }

  return `${check}`

}
module.exports = certification