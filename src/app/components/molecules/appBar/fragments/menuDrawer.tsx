import { navigations } from "@/app/utils/home"
import { Box, List, ListItem, ListItemText, Popover } from "@mui/material"
import { FC } from "react"

type Props = {
  id?: string,
  anchorEl: HTMLButtonElement | null,
  open: boolean,
  handleClose: () => void
}

export const MenuDrawer:FC<Props> = ({id, anchorEl, open, handleClose}) => {
  return (

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
         <Box sx={{ width: 250 }} role="presentation" onClick={handleClose}>
          <List>
            {navigations.map((navigation) => (
              <ListItem key={navigation.name} component="a" href={navigation.href}>
                <ListItemText primary={navigation.name} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Popover>
        )
}