import { gql } from '@apollo/client'

export const GET_USER_QUERY = gql`
  query userQuery($id: Int!) {
    user(id: $id) {
      id
      name
      nickname
    }
  }
`

export const GET_USERS_QUERY = gql`
  query usersQuery {
    users {
      id
      name
      nickname
    }
  }
`
