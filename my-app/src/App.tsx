import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import AppMenu from './components/AppMenu/AppMenu'
import { Toolbar } from '@material-ui/core'
import logo from './components/AppMenu/LeeWiseman_Logo.png'

const App: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={clsx('App', classes.root)}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <img src={logo} alt="logo" className={classes.logo} />
        <AppMenu />
      </Drawer>
      <main className={classes.content}>
        <Container maxWidth="lg" className={classes.container}>
          <Typography>I'm the content</Typography>
        </Container>
      </main>
    </div>
  )
}

const drawerWidth = 180

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    background: '#000000',
    color: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    backgroundColor: 'grey'
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  logo: {
    width: '100%',
    marginBottom: '30px',
  },
}))

export default App