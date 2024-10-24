import { FC } from "react"
import { Box, CardActionArea, CardContent, CardHeader, CardMedia, Divider, Card as MuiCard, Typography } from "@mui/material"
import Image from "next/image"

type Props = {
    name: string,
    image?: string,
    description: string,
}

export const Card: FC<Props> = ({name, image, description,}) => {
    return (
        <MuiCard sx={{cursor: 'none', pointerEvents: 'none'}} elevation={4}>
            <CardActionArea sx={{display: "flex", flexDirection: 'column', alignItems: "center", padding:1, }}>
                <Box display='flex' alignItems="center" gap={1} width='100%'  >
                    {image && (
                        <Image src={image} alt={""} width={25} height={25}/>
                    )}  
                    <Typography fontSize={20} fontWeight={500}>{name}</Typography>
                </Box>
              
            </CardActionArea>
        </MuiCard>
    )
}