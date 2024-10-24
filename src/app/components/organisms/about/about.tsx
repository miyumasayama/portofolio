import { Box, Typography } from "@mui/material"
import { HomeTitle } from "../../molecules/homeTitle/homeTitle"

export const About = () => {
    return (
        <Box mb={8} id="about" sx={{scrollMarginTop: '100px'}}>
            <HomeTitle text="About" />
            <Box 
                display="flex"  
                justifyContent="space-between"
                alignItems="center" 
                my={2}
                mx={8} >
                <Box
                    component="img"
                    width="30%"
                    sx={{
                        height: 200,
                        width: 200,
                        borderRadius: '50%',
                        objectFit: 'cover', 
                        overflow: 'hidden',  
                    }}
                    alt="my profile picture"
                    src="http://localhost:3000//miyu.jpg"
                    />
                    <Box width='70%'>
                        <Typography fontSize={24} color="gray" mb={1}>
                            frontend engineer
                        </Typography>
                        <Typography>
                            I am a dedicated software engineer with 3 years and a harf year of professional experience.
                            Currently, I specialize in frontend development, focusing on technologies such as TypeScript, React, and Next.js. My goal is to eventually take on roles as a Tech Lead or Full-Stack Engineer.
                            I am actively expanding my skill set to include Docker, SQL, and AWS.
                        </Typography>
         
                    </Box>
                </Box>
        </Box>
    )
}