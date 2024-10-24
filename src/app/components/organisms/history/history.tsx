import { Box, Divider, Typography } from "@mui/material";
import { FC } from "react";
import { HomeTitle } from "../../molecules/homeTitle/homeTitle";
import { AutoStoriesOutlined, BusinessOutlined } from "@mui/icons-material";

const histories = [
    {
        title: 'Sophia University',
        subtitle: 'Department of English Studies, Faculty of Foreign Studies',
        date: 'Apr, 2017 - Sep, 2022',
        description: '頑張ったよ！BA',
        icon: <AutoStoriesOutlined />
    },
    {
        title: 'Vantage IT, Ltd.',
        subtitle: 'Internship as a web developer',
        date: 'January, 2021 - Mar, 2022',
        description: '頑張ったよ',
        icon: <BusinessOutlined />
    },
    {
        title: 'i3Design, Ltd.',
        subtitle: 'Frontend Engineer | Web Developer',
        date: 'Apr, 2022 - Sep, 2024',
        description: '頑張ったよ',
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
                        <Box display='flex' gap={1} flexDirection='column' mb={isLast ? 0 : 3}>
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
                            {/* */}
                            <Typography>
                                {description}
                            </Typography>
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