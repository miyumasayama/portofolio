import { Box, Divider, List, ListItem, Typography } from "@mui/material";
import { FC } from "react";
import { HomeTitle } from "../../molecules/homeTitle/homeTitle";
import { AutoStoriesOutlined, BusinessOutlined } from "@mui/icons-material";

const histories = [
    {
        title: 'Sophia University',
        subtitle: 'Department of English Studies, Faculty of Foreign Studies',
        date: 'Apr, 2017 - Sep, 2022',
        description: [
            'Gained a deep understanding of British and American literature, including literary analysis and critical thinking skills.',
            'Developed advanced English communication skills, both written and verbal, through academic writing, presentations, and discussions.',
            'Explored cross-cultural communication, emphasizing the differences between Western and Japanese cultural contexts.',
        ],
        icon: <AutoStoriesOutlined />
    },
    {
        title: 'Vantage IT, Ltd.',
        subtitle: 'Internship as a web developer',
        date: 'January, 2021 - Mar, 2022',
        description:[ 
            'Developed web applications using Firebase, WordPress, Vue.js, and Node.js during an internship.',
            'Created an OKR (Objectives and Key Results) application and a beauty website for the company.',
            'Gained fundamental web development skills and hands-on experience with a modern tech stack.'],
        icon: <BusinessOutlined />
    },
    {
        title: 'i3Design, Ltd.',
        subtitle: 'Frontend Engineer | Web Developer',
        date: 'Apr, 2022 - Sep, 2024',
        description: [
            "React Development: Gained proficiency in using React and its ecosystem, including libraries like Redux and RTK Query, for state management and efficient API handling.",
            'Stock Ownership Application for a Securities Company: Involved improving the stock ownership plan application process through a React-based web app to help streamline the workflow for employees at the firm.',
            'Store Shelf Management System for Convenience Stores: To optimize shelf management and analysis, focused on user experience and functionality for managing store inventories.',
            'Agile Project Management: Acted as a sub-team leader, conducting tasks such as attending client meetings, managing schedules, assigning tasks to the team, and communicating with overseas team members. Responsible for ensuring the timely delivery of features and coordinating with team members across different time zones.',
            'UI/UX Collaboration: I worked closely with designers to continuously improve the UI/UX of our applications, ensuring a smooth and visually appealing experience for the end users.',
            'Code Review and Mentorship: Performed code reviews and provided guidance to team members to maintain high code quality and encourage knowledge sharing within the team.'
        ],
        icon: <BusinessOutlined />
    },

]

export const History: FC = () => {
    return (
        <Box mb={8} id="history" sx={{scrollMarginTop: '100px'}}>
            <HomeTitle text='History' />
            <Box mx={4} p={4} border='solid 1px #dcdcdc' sx={{ borderRadius: '20px' }}>
                {histories.map((history, index) => {
                    const { title, subtitle, date, description, icon } = history
                    const isLast = index === histories.length -1
                    return (
                        <Box key={title} display='flex' gap={1} flexDirection='column' mb={isLast ? 0 : 3}>
                            <Box display='flex' alignItems='center' gap={1}>
                            {icon}
                                <Typography fontSize={24} color=''>
                                    {title}
                                </Typography>
                            </Box>
                            <Typography fontSize={18} color='gray'>
                                {subtitle}
                            </Typography>
                            <Typography fontSize={14} color='lightGray'>
                                {date}
                            </Typography>
                            <Box>
                                {description.map((text) => {
                                    return (
                                        <Box display='flex' key={text}>
                                            <Typography>
                                                ・
                                            </Typography>
                                            <Typography>
                                                {text}
                                            </Typography>
                                         </Box>
                                       
                                    )
                                })}
                            </Box>
                            {!isLast && (
                                <Divider orientation='horizontal' />
                            )}
                        </Box>
                    )
                })}
            </Box>
        </Box>
    )
}