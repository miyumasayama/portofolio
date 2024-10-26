import { navigations } from "@/utils/home";
import {
  AppBar as MuiAppBar,
  Divider,
  Toolbar,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { FC, useState } from "react";
import { Navigation } from "../footer/fragments/navigation";
import { MenuDrawer } from "./fragments/menuDrawer";

export const AppBar: FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <MuiAppBar
      elevation={0}
      position={"fixed"}
      sx={{
        maxHeight: 60,
        p: 0,
        ":after": { display: "none" },
      }}
    >
      <Toolbar
        variant="dense"
        sx={{
          minHeight: 60,
          backgroundColor: "rgba(229, 171, 190, 0.5)",
          fontFamily: "monospace",
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontFamily: "monospace",
            mr: 2,
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          {`Miyu's Portfolio`}
        </Typography>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          aria-describedby={id}
          edge="end"
          sx={{ display: { xs: "flex", sm: "flex", md: "none" } }}
          onClick={(e) => handleOpen(e)}
        >
          <MenuIcon />
        </IconButton>

        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          {navigations.map((navigation) => {
            const { href, name } = navigation;
            return <Navigation key={name} href={href} title={name} />;
          })}
        </Box>
      </Toolbar>
      <Divider />
      <MenuDrawer
        id={id}
        anchorEl={anchorEl}
        open={open}
        handleClose={() => handleClose()}
      />
    </MuiAppBar>
  );
};
