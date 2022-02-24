import React from 'react'
import clsx from 'clsx'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import AppMenu from './components/AppMenu/AppMenu'
import logo from './components/AppMenu/LeeWiseman_Logo.png'
import SocialIcons from './components/SocialIcons/SocialIcons'

const PageAbout = () => <Typography variant="h3" component="h1">About Page</Typography>
const PageSkills = () => <Typography variant="h3" component="h1">Skills Page</Typography>
const PageWork = () => <Typography variant="h3" component="h1">Work Page</Typography>
const PageContact = () => <Typography variant="h3" component="h1">Contact Page</Typography>
const PageBlog = () => <Typography variant="h3" component="h1">Blog Page</Typography>

const App: React.FC = () => {
  const classes = useStyles()

  return (
    <BrowserRouter>
      <div className={clsx('App', classes.root)}>
        <CssBaseline />
        <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <img src={logo} className={classes.logo} />
          <AppMenu />
          <SocialIcons />
        </Drawer>
        <main className={classes.content}>
          <Container maxWidth="lg" className={classes.container}>

            <Routes>
              <Route path="/" element={<PageAbout />} />
              <Route path="/skills" element={<PageSkills />} />
              <Route path="/work" element={<PageWork />} />
              <Route path="/contact" element={<PageContact />} />
              <Route path="/blog" element={<PageBlog />} />
            </Routes>

          </Container>
        </main>
      </div>
    </BrowserRouter>
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
    width: '95%',
    marginBottom: '30px',
  },
}))

export default App