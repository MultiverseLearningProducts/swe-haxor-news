import { faker } from '@faker-js/faker'

function post () {
  return {
    title: faker.hacker.phrase(),
    url: faker.internet.domainName(),
    points: faker.datatype.number({ min: 1, max: 1000 }),
    comments: faker.datatype.number({ min: 1, max: 200 })
  }
}

function getRandom (n, f) {
  return new Array(n)
    .fill(null)
    .map(_ => f())
}

export const posts = getRandom(30, post)

export const comments = [
  {
    text: "Hi everyone",
    children: [
      { text: "Hi to you!", children: [] },
      {
        text: "Greetings",
        children: [
          { text: "Are you an alien?!", children: [] },
        ],
      },
    ],
  },
  {
    text: 'First!',
    children: [
        { text: 'Second!', children: [] }
    ]
  }
];