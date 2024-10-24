import { Box, Divider, Typography } from "@mui/material";
import { FC } from "react";
import { HomeTitle } from "../../molecules/homeTitle/homeTitle";
import { AutoStoriesOutlined } from "@mui/icons-material";

const histories = [
    {
        title: 'Sophia University',
        subTitle: 'Department of English Studies, Faculty of Foreign Studies',
        date: 'Apr, 2017 - Sep, 2022',
        description: '頑張ったよ！BA'
    },
    {
        title: 'Vantage IT, Ltd.',
        subtitle: 'Internship as a web developer',
        date: 'January, 2021 - Mar, 2022',
        description: '頑張ったよ'
    },
    {
        title: 'i3Design, Ltd.',
        subtitle: 'Frontend Engineer | Web Developer',
        date: 'Apr, 2022 - Sep, 2024',
        description: '頑張ったよ'
    },

]

export const History: FC = () => {
    return (
        <Box mb={8}>
            <HomeTitle text='History' />
            <Box mx={4} p={4} border='solid 1px #dcdcdc' sx={{ borderRadius: '20px' }}>
                <Box display='flex' gap={1} flexDirection='column'>
                    {histories.map((history) => {
                        const { title, subtitle, date, description } = history
                        return (
                            <>
                                <Box display='flex' alignItems='center' gap={1}>
                                    <AutoStoriesOutlined />
                                    <Typography fontSize={24}>
                                        {title}
                                    </Typography>
                                </Box>
                                <Typography fontSize={18}>
                                    {subtitle}
                                </Typography>
                                <Typography fontSize={14}>
                                    {date}
                                </Typography>
                                <Divider orientation='horizontal' />
                                <Typography>
                                    {description}
                                </Typography>
                            </>
                        )
                    })}

                </Box>
                <Box display='flex' gap={1} flexDirection='column'>
                    <Box display='flex' alignItems='center' gap={1}>
                        <AutoStoriesOutlined />
                        <Typography fontSize={24}>
                            Vantage It, Ltd.
                        </Typography>
                    </Box>

                </Box>

            </Box>
        </Box>
    )
}