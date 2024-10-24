import { Box,  Link, Typography } from "@mui/material";
import { FC } from "react";
import { GitHub, Instagram } from "@mui/icons-material";
import { navigations } from "@/app/utils/home";
import { Navigation } from "./fragments/navigation";

const contacts = [
  {
    name: 'ohagi_tofu_921',
    icon: <Instagram />,
    url: 'https://www.instagram.com/ohagi_tofu_921/'
  }, {
    name: 'miyumasayama',
    icon: <GitHub />,
    url: 'https://github.com/miyumasayama/portofolio/issues', 
  }, 
]

export const Footer: FC = () => {
  return (
    <Box 
      sx={{
        backgroundColor: '#8a91c8', 
        height:"50vh"
      }} 
      px={2}
      py={4}
      display='flex' 
      justifyContent='space-between' 
      flexDirection='column'>
      <Box 
        display="flex"
        flexDirection="column"
        gap={1}
        ml={4}
      >
        <Typography fontSize={24} color="white">
          Navigation
        </Typography>
        <Box ml={2} display="flex" flexDirection="column">
          {navigations.map((navigation) => {
            const {href, name} = navigation
            return (<Navigation href={href} title={name} />)
          })}
        </Box>
      </Box>
      <Box 
        display="flex"
        flexDirection="column"
        gap={1}
        ml={4}
      >
        <Typography fontSize={24} color="white">
          Contact
        </Typography>
          <Box ml={2}>
        {contacts.map((contact) => {
          const {url, name, icon} = contact
          return (
            <Link 
              href={url} 
              target="_blank" 
              rel="noopener" 
              sx={{
                display: 'flex', 
                gap: 1,
                color: 'white', 
                textDecoration: 'none',
                '.MuiLink-root': {
                  color: 'black',
                  textDecoration: 'none'
                }
              }}
            >
             {icon}
              <Typography>{name}</Typography>
            </Link>
          )
        })}
        </Box>
      </Box> 
      <Box 
        width="100%" 
        display="flex" 
        justifyContent="center" 
        alignItems="center" 
        flexDirection='column'
        pt={2}
        sx={{borderTop: '1px solid white'}}
      >     
        <Typography color="white">
          © 2024 Miyu Masayama. All rights are reserved.
        </Typography>
      </Box>
    </Box>
  )
}