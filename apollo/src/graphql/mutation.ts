import { gql } from '@apollo/client'

export const CHANGE_NICKNAME_MUTATION = gql`
  mutation changeNickname($id: Int!, $nickname: String!) {
    changeNickname(input: { id: $id, nickname: $nickname }) {
      id
      name
      nickname
    }
  }
`

export const RESET_USERS = gql`
  mutation resetUsers {
    resetUsers {
      id
      name
      nickname
    }
  }
`
