import { Box, Divider, Typography } from "@mui/material"
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
                    src={`${process.env.NEXT_PUBLIC_URL}//miyu.jpg`}
                    />
                    <Box width='70%' display="flex" flexDirection="column" gap={1}>
                        <Typography fontSize={24} color="gray" >
                           🇯🇵 Miyu Masayama 
                        </Typography>
                        <Typography fontSize={16} color="gray">
                            Frontend Engineer | Web Developer
                        </Typography>
                        <Divider orientation="horizontal" />
                        <Typography>
                            Dedicated software engineer with 3 years and a harf year of professional experience.
                            Specialize in frontend development, focusing on technologies such as TypeScript, React, and Next.js. My goal is to eventually take on roles as a Tech Lead or Full-Stack Engineer.
                            Actively expanding my skill set to include Docker, SQL, and AWS.
                        </Typography>
                        <Divider orientation="horizontal" />
                        <Typography>
                            Qualification : Fundamental Information Technology Engineer Examination, AWS Certified Solutions Architect, TOEIC 950
                        </Typography>
         
                    </Box>
                </Box>
        </Box>
    )
}