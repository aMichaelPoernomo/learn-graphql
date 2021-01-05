import React, { useMemo, useCallback } from 'react'
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { Button } from '@material-ui/core'

import { useMutation } from '@apollo/client'
import { RESET_USERS } from '../graphql/mutation'

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell)

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableRow)

const useStyles = makeStyles({
  table: {
    minWidth: 300,
    marginTop: 5,
  },
  tableContainer: {
    marginTop: 20,
  },
})

interface Props {
  data?: { [key: string]: any }[] | null
  refresh?: () => void
  reset?: boolean
}

export default function CustomizedTables(props: Props) {
  const classes = useStyles()
  const { data, refresh, reset } = props

  const keys = useMemo(() => {
    return data ? Object.keys(data[0]) : []
  }, [data])

  // ----------------------------------------- reset users -----------------------------------------
  const [resetUsers] = useMutation(RESET_USERS)
  const handleReset = useCallback(() => {
    resetUsers()
  }, [resetUsers])
  // --------------------------------------- end reset users -----------------------------------------

  return (
    <TableContainer className={classes.tableContainer} component={Paper}>
      {refresh && (
        <Button variant="contained" color="primary" onClick={() => refresh()}>
          Refresh Data
        </Button>
      )}
      {reset && (
        <Button variant="contained" color="secondary" onClick={() => handleReset()}>
          Reset Users
        </Button>
      )}
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            {keys.map((k, i) => (
              <StyledTableCell key={i}>{k}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map(row => (
            <StyledTableRow key={row.id}>
              {Object.values(row).map((r, i) => (
                <StyledTableCell key={i}>{r}</StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
