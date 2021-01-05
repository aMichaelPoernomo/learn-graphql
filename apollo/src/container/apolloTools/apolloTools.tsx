import React, { useContext } from 'react'
import { useQuery } from '@apollo/client'

import Navigation from '../navigation'
import Table from '../table'
import NicknameForm from '../nicknameForm'
import { GET_USER_QUERY, GET_USERS_QUERY } from '../../graphql/query'
import { userQueryVariables, userQuery } from '../../__generated__/userQuery'
import { usersQuery } from '../../__generated__/usersQuery'
import Context from '../../config/context'

function ApolloTools() {
  const { data: usersData, refetch: usersRefetch } = useQuery<usersQuery>(GET_USERS_QUERY)
  const { userProfile } = useContext(Context)
  const { data: userData } = useQuery<userQuery, userQueryVariables>(GET_USER_QUERY, { variables: { id: userProfile } })

  return (
    <div>
      <Navigation />
      <h1>APOLLO TOOLS</h1>
      <NicknameForm />
      <h2>Profile</h2>
      <div style={{ width: '50%' }}>
        {userData?.user && (
          <Table data={Object.entries(userData?.user).map(([key, value], i) => ({ id: i, key, value }))} />
        )}
      </div>

      <h2>Users List</h2>
      <Table data={usersData?.users} refresh={usersRefetch} reset />
    </div>
  )
}

export default ApolloTools
