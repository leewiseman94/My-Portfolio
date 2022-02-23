import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'

import List from '@material-ui/core/List'

import AppMenuItem from '../AppMenuItem/AppMenuItem'

import { appMenuItems } from './appMenuItems'

const AppMenu: React.FC = () => {
  const classes = useStyles()

  return (
    <List component="nav" className={classes.appMenu} disablePadding>
      {appMenuItems.map((item, index) => (
        <AppMenuItem {...item} key={index} />
      ))}
    </List>
  )
}

const drawerWidth = 150

const useStyles = makeStyles(theme =>
  createStyles({
    appMenu: {
      width: '100%',
    },
  }),
)

export default AppMenu
