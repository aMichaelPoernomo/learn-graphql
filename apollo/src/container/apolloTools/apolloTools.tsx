import React from 'react'
import { useQuery } from '@apollo/client'

import Navigation from '../navigation'
import Table from '../table'
import NicknameForm from '../nicknameForm'
import { GET_USERS_QUERY } from '../../graphql/query'

function ApolloTools() {
  const { data: usersData, refetch: usersRefetch } = useQuery(GET_USERS_QUERY)

  return (
    <div>
      <Navigation />
      <h1>APOLLO TOOLS</h1>
      <NicknameForm />
      <h2>Profile</h2>
      <div style={{ width: '50%' }}></div>

      <h2>Users List</h2>
      <Table data={usersData?.users} refresh={usersRefetch} reset />
    </div>
  )
}

export default ApolloTools
