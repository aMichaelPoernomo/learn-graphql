import React from 'react'
import { gql, useQuery } from '@apollo/client'

import Navigation from '../navigation'
import Table from '../table'
import NicknameForm from '../nicknameForm'

const GET_USERS = gql`
  query usersQueryA {
    users {
      id
      name
      nickname
    }
  }
`

function ApolloClient() {
  const { data: usersData, refetch: usersRefetch } = useQuery(GET_USERS)

  return (
    <div>
      <Navigation />
      <h1>APOLLO CLIENT</h1>
      <NicknameForm />
      <Table data={usersData?.users} refresh={usersRefetch} reset />
    </div>
  )
}

export default ApolloClient
