import faker from 'faker'
import { gql } from '@apollo/client'
import tasks from './tasks.fixture.json'

function generateItem() {
  const title = faker.hacker.phrase().slice(0, 50).trim()
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
  extend type Query {
    createTaskVisible: Boolean
    makeOfferVisible: Boolean
    rejectOfferVisible: Boolean
    hireVisible: Boolean
    task(slug: String): Task
  }

  extend type User {
    name: String!
    profilePictureUrl: String
    onlineStatus: String!
    lastSeen: Date
  }
`

export const resolvers = {
  Query: {
    task: (root, { slug }) => {
      return tasks.find((task: any) => task.slug === slug)
    },
  },
}
