import IconExpandLess from '@material-ui/icons/ExpandLess'
import IconExpandMore from '@material-ui/icons/ExpandMore'
import IconPeople from '@material-ui/icons/People'
import IconSchool from '@material-ui/icons/School'
import IconWork from '@material-ui/icons/Work'
import IconContactPhone from '@material-ui/icons/ContactPhone'
import IconLibraryBooks from '@material-ui/icons/LibraryBooks'

export const appMenuItems = [
  {
    name: 'About Me',
    link: '/',
    Icon: IconPeople,
  },
  {
    name: 'My Skills',
    link: '/my-skills',
    Icon: IconSchool,
  },
  {
    name: 'Work',
    link: '/work',
    Icon: IconWork,
  },
  {
    name: 'Contact',
    link: '/contact',
    Icon: IconContactPhone,
  },
  {
    name: 'Blog',
    link: '/blog',
    Icon: IconLibraryBooks,
  },
  // {
  //   name: 'Nested Pages',
  //   Icon: IconLibraryBooks,
  //   items: [
  //     {
  //       name: 'Level 2',
  //     },
  //     {
  //       name: 'Level 2',
  //       items: [
  //         {
  //           name: 'Level 3',
  //         },
  //         {
  //           name: 'Level 3',
  //         },
  //       ],
  //     },
  //   ],
  // },
]