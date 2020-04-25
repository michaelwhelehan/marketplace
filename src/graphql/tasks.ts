import faker from 'faker'
import { gql } from '@apollo/client'
import tasks from './tasks.json'

function generateItem() {
  const title = faker.hacker
    .phrase()
    .slice(0, 50)
    .trim()
  const slug = faker.helpers.slugify(title).toLowerCase()
  return {
    id: faker.random.uuid(),
    creator: {
      name: faker.name.findName(),
      profilePictureUrl: faker.image.avatar(),
      onlineStatus: 'online',
      lastSeen: faker.date.past(),
      __typename: 'User',
    },
    title,
    slug,
    budget: parseInt(faker.finance.amount(), 10),
    currency: { code: 'EUR', iso: '€', __typename: 'Currency' },
    location: 'Remote',
    dueDate: faker.date.future(),
    details: faker.lorem.paragraph(),
    numOffers: 2,
    __typename: 'Task',
  }
}

function generateItems(numToGenerate: number) {
  const list = []
  for (let i = 0; i < numToGenerate; i++) {
    const listItem = generateItem()
    list.push(listItem)
  }
  return list
}

export const typeDefs = gql`
  type TaskFeed {
    cursor: String!
    tasks: [Task]!
  }

  type User {
    name: String!
    profilePictureUrl: String
    onlineStatus: String!
    lastSeen: Date
  }

  type Currency {
    code: String!
    iso: String!
  }

  type Task {
    id: ID!
    creator: User!
    title: String!
    slug: String!
    budget: Decimal!
    currency: Currency!
    location: String!
    dueDate: Date!
    details: String
    numOffers: Integer!
  }
`

export const resolvers = {
  Query: {
    taskFeed: (root, { cursor }) => {
      return {
        cursor: '2cf2a616-56fd-4d54-9585-a48666549102',
        tasks,
        __typename: 'TaskFeed',
      }
    },
    task: (root, { slug }) => {
      return tasks.find((task: any) => task.slug === slug)
    },
  },
}
