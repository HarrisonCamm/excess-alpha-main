import React from 'react'
import { Assignment, BarChart, Dashboard, Layers, People, ShoppingCart } from "@mui/icons-material";
import { ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from "@mui/material";



export const mainListItems = (
    <React.Fragment>
      <ListItem>
        <ListItemIcon>
          <Dashboard />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <ShoppingCart/>
        </ListItemIcon>
        <ListItemText primary="Orders" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <People />
        </ListItemIcon>
        <ListItemText primary="Customers" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <BarChart />
        </ListItemIcon>
        <ListItemText primary="Reports" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <Layers />
        </ListItemIcon>
        <ListItemText primary="Integrations" />
      </ListItem>
    </React.Fragment>
  );
  
  export const secondaryListItems = (
    <React.Fragment>
      <ListSubheader component="div" inset>
        Saved reports
      </ListSubheader>
      <ListItemButton>
        <ListItemIcon>
          <Assignment />
        </ListItemIcon>
        <ListItemText primary="Current month" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <Assignment />
        </ListItemIcon>
        <ListItemText primary="Last quarter" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <Assignment />
        </ListItemIcon>
        <ListItemText primary="Year-end sale" />
      </ListItemButton>
    </React.Fragment>
  );