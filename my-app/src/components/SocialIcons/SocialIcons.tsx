import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'

import List from '@material-ui/core/List'

import SocialIcon from '../SocialIcon/SocialIcon'

import { items } from './items'

const AppMenu: React.FC = () => {
  const classes = useStyles()

  return (
    <List component="nav" className={classes.socialIcons} disablePadding>
      {items.map((item, index) => (
        <SocialIcon {...item} key={index} />
      ))}
    </List>
  )
}

const drawerWidth = 150

const useStyles = makeStyles(theme =>
  createStyles({
    socialIcons: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '60px',
    },
  }),
)

export default AppMenu
