import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles, createStyles } from '@material-ui/core/styles'
// import { SvgIconProps } from '@material-ui/core/SvgIcon'

import List from '@material-ui/core/List'

import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Collapse from '@material-ui/core/Collapse'

import IconExpandLess from '@material-ui/icons/ExpandLess'
import IconExpandMore from '@material-ui/icons/ExpandMore'

import SocialIconsComponent from '../SocialIconsComponent/SocialIconsComponent'


export interface SocialIconProps {
  name?: string
  link: string
  Icon: any
}



const AppMenuItem: React.FC<SocialIconProps> = props => {
  const { name, link, Icon = [] } = props
  const classes = useStyles()

  return (
    <>
      {!!Icon && (
        <SocialIconsComponent className={classes.socialIconLink} link={link}>
          <ListItemIcon className={classes.socialIcon} >
            <Icon />
          </ListItemIcon>
        </SocialIconsComponent>
      )}
    </>
  )
}

const useStyles = makeStyles(theme =>
  createStyles({
    socialIconLink: {
      padding: '0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    socialIcon: {
      color: '#fff',
      minWidth: '0',
      '&:hover': {
        color: '#bbbbbb',
      }
    },
  }),
)

export default AppMenuItem


