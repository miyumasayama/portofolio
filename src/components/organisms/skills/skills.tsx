import { Box, Grid2, Paper } from "@mui/material"
import { FC } from "react"
import { HomeTitle } from "../../molecules/homeTitle/homeTitle"
import { Card } from "./fragments/card"
import { skillSet } from "./fragments/skillSet"

export const Skills:FC = () => {
    return (
        <Box pt={1} pb={8} id="skills" sx={{backgroundColor: '#eaedf7', scrollMarginTop: '100px'}}>
            <HomeTitle text='Skills'/>
            <Box mx={8}>
                <Grid2 container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} width='100%' >
                    {skillSet.map(({name, image, description}) => {
                        return (
                            <Grid2 size={{xs:12, sm:6, md: 4}} key={name}>
                                <Card name={name} image={image} description={description} />
                            </Grid2>
                        )
                    })}

                </Grid2>
            </Box>
        </Box>
    )
}