import React, { useCallback, useContext } from 'react'
import { useQuery } from '@apollo/client'
import { Grid, ButtonGroup, Button, InputLabel, FormControl, MenuItem, Select } from '@material-ui/core'
import { useHistory } from 'react-router'

import routePath from '../config/routePath'
import { GET_USERS_QUERY } from '../graphql/query'
import Context from '../config/context'

function Navigator() {
  const history = useHistory()
  const { data: usersData } = useQuery(GET_USERS_QUERY)
  const { userProfile, setUserProfile } = useContext(Context)

  const handleChange = useCallback(
    e => {
      setUserProfile(parseInt(e.target.value))
    },
    [setUserProfile],
  )

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
        <Button
          onClick={() => {
            history.push(routePath.apolloClient)
          }}
        >
          Apollo Client
        </Button>
        <Button
          onClick={() => {
            history.push(routePath.apolloTools)
          }}
        >
          Apollo Tools
        </Button>
        <Button
          onClick={() => {
            history.push(routePath.liveChat)
          }}
        >
          Live Chat
        </Button>
        <Button>
          <FormControl>
            <InputLabel>User</InputLabel>
            <Select value={userProfile} onChange={handleChange}>
              {usersData?.users.map((e: { id: string; name: string; nickname: string }) => (
                <MenuItem key={e.id} value={e.id}>
                  {e.id}. {e.name} ({e.nickname})
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Button>
      </ButtonGroup>
    </Grid>
  )
}

export default Navigator
