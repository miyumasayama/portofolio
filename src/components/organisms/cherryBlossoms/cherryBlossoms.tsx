import { Box } from "@mui/material"
import { FC, useEffect } from "react"
import { Canvas } from "../../molecules/canvas/canvas"
import Vivus from "vivus";
import { Welcome } from "./fragments/welcome";

export const CherryBlossoms : FC = () => {

    useEffect(() => {
        new Vivus('title', {duration: 200, type: "oneByOne"});
    },[])

    return (
        <Box  
            height="100vh"
            display='flex' 
            alignItems='center' 
            justifyContent="center"
            position="relative"
            sx={{backgroundColor: '#fffafa'}}>
           
            <Box 
                height='600px'
                width='600px'
                sx={{
                    backgroundImage: 'url("/sakura.png")',
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center', 
                    backgroundRepeat: 'no-repeat'
                }} />
             <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                zIndex={1}
            >
                <Canvas />
            </Box>
            <Box  position="absolute">
               <Welcome />
            </Box>
        </Box>
    )
}