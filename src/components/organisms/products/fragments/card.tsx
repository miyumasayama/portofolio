import { FC } from "react";
import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Card as MuiCard,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";

type Props = {
  name: string;
  path: string;
  description: string;
  image: string;
};

export const Card: FC<Props> = ({ name, path, description, image }) => {
  const router = useRouter();
  return (
    <MuiCard
      sx={{ height: 300, "&:hover": { cursor: "pointer" } }}
      onClick={() => router.push(path)}
    >
      <CardMedia sx={{ height: 180 }} title={name} image={image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
      </CardContent>
    </MuiCard>
  );
};
