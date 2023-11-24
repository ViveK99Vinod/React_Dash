import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 350 }} 
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
       <div style={{textAlign:'center'}} className='usercard' >
        <img style={{ width: '100px', height: '100px' }} src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png" alt="" />
            <h4>Ram Mohan</h4>
            <span>abcd@gmail.com</span>
       </div>
      <br />
        {[
          { text: 'Dashboard', image: 'https://cdn.discordapp.com/attachments/751482975191040091/1177306123607474239/dashboard.png?ex=657206c5&is=655f91c5&hm=ca529626dd71b9b6392644f4ae19799135b6365575985a68ec23125fd0e84c96&' },

          { text: 'Perks', image: 'https://cdn.discordapp.com/attachments/751482975191040091/1177306123045445742/planting.png?ex=657206c5&is=655f91c5&hm=1293e2ff6f068775d95f67ae32d25f9f1308647bf68f1ad38d303638b4f1cc99&' },

          { text: 'Addon', image: 'https://media.discordapp.net/attachments/751482975191040091/1177306123351625778/plugin.png?ex=657206c5&is=655f91c5&hm=6eae1e9d75d6ce1de4846aa73f6846d5e9ec7618c13e2b77ef9310f53a78105d&=&format=webp'  },

          { text: 'Faq', image: 'https://media.discordapp.net/attachments/751482975191040091/1177306123968188537/question.png?ex=657206c5&is=655f91c5&hm=25c4e8f2f4ce901ac2fa0efbdcd2f140da8a33797f029da30a2f1c21e390c1a0&=&format=webp' },

          { text: 'Support', image: 'https://cdn.discordapp.com/attachments/751482975191040091/1177306124295340162/help-desk.png?ex=657206c5&is=655f91c5&hm=bdfb36310ce1421b1dcb200c60fa900d05a9e9b2592e0879d5e24cd412f02ee7&' },
        ].map(({ text, icon, image }, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton href={`/${text}`}>
              <ListItemIcon>
                {icon}
                <img src={image} alt={`${text} Image`} style={{ width: '24px', height: '24px', marginLeft: '8px' }} />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    
      <List style={{ position: 'absolute', bottom: 0 }}>
        {['Logout'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
              
                
              </ListItemIcon>
              <ListItemText primary={text} />
              <img src="https://cdn.discordapp.com/attachments/751482975191040091/1177311179618664499/power.png?ex=65720b7a&is=655f967a&hm=3f22a56f8062165d585cf329a101841b443505327f8472c71be2e7044bcdf7dd&" alt="Logout Image" style={{ width: '24px', height: '24px', marginLeft: '8px' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
         
          <IconButton  onClick={toggleDrawer(anchor, true)}>
           
            <img   src="https://cdn.discordapp.com/attachments/751482975191040091/1177296831596728320/Screenshot_101.png?ex=6571fe1d&is=655f891d&hm=388cf95f9a5bb8123c4ae393d3c441c6e1b1b00d9bab2ce978a5a109c084f4fe&" alt="Toggle Icon" style={{ width: '350px', height: '150px' , marginTop:'0px'}} />
          </IconButton>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
