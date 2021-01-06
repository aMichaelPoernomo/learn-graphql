import { gql } from '@apollo/client'

export const GET_USERS_QUERY = gql`
  query usersQuery {
    users {
      id
      name
      nickname
    }
  }
`
