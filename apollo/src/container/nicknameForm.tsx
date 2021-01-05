import React, { useRef, useCallback } from 'react'
import { TextField, Button } from '@material-ui/core'
import { useMutation } from '@apollo/client'

import { CHANGE_NICKNAME_MUTATION } from '../graphql/mutation'
import { changeNicknameVariables, changeNickname } from '../__generated__/changeNickname'

function NicknameForm() {
  const fieldId = useRef<HTMLInputElement>()
  const fieldNick = useRef<HTMLInputElement>()
  const [changeNickname] = useMutation<changeNickname, changeNicknameVariables>(CHANGE_NICKNAME_MUTATION)

  const handleUpdate = useCallback(() => {
    changeNickname({
      variables: {
        id: parseInt(fieldId.current?.value || '0'),
        nickname: fieldNick.current?.value || '',
      },
    })
  }, [changeNickname])

  return (
    <form>
      <TextField inputRef={fieldId} required label="ID" variant="outlined" />
      <TextField inputRef={fieldNick} required label="Nickname" variant="outlined" />
      <Button variant="contained" onClick={handleUpdate}>
        Update
      </Button>
    </form>
  )
}

export default NicknameForm
