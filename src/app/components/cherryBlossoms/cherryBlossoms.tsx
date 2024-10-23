import { Box } from "@mui/material"
import { FC } from "react"

export const CherryBlossoms : FC = () => {
    return (
        <Box  height='100vh' display='flex' alignItems='center' justifyContent="center">
        <Box 
        height='600px'
        width='600px'
         sx={{
            backgroundImage: 'url("/tree.jpeg")',
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat'
        }}>
            
        </Box>
        </Box>
    )
}