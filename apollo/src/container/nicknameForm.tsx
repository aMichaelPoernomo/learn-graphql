import React, { useRef, useCallback } from 'react'
import { TextField, Button } from '@material-ui/core'

function NicknameForm() {
  const fieldId = useRef<HTMLInputElement>()
  const fieldNick = useRef<HTMLInputElement>()

  const handleUpdate = useCallback(() => {
    console.log(fieldId.current?.value, fieldNick.current?.value)
  }, [])

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
