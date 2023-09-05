import styles from "./HeaderMobile.module.scss";
import {
  Button,
  Chip,
  Container,
  Grid,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Dropdown, MenuButton } from "@mui/base";
import MenuIcon from "@mui/icons-material/Menu";

const HeaderMobile = ({}) => {
  // export default function Header() {
  function handlePhoneClick() {
    window.location.href = "tel://" + "0090";
  }

  function handleEmailClick() {
    window.location.href = "mailto:" + "oznurilhankarabulut@gmail.com";
  }

  function handleInstagramClick() {
    window.location.href = "https://www.instagram.com/";
  }

  function handleWhatsappClick() {
    window.open("https://api.whatsapp.com/send?phone=0090", "_blank");
  }

  function handleLocationClick() {
    window.open(
      "https://www.google.com/maps/place/%C4%B0stanbul+Anadolu+Adalet+Saray%C4%B1/@40.9149637,29.1758131,17z/data=!3m1!4b1!4m6!3m5!1s0x14cac461555a9809:0x1e0173e0877c9506!8m2!3d40.9149597!4d29.178388!16s%2Fg%2F12qf9c82t?authuser=0&entry=ttu"
    );
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.ChangeEvent<any>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container className={styles.header}>
      <Grid
        container
        columns={12}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={10}>
          <h1 className={styles.logoStyle}>Arabulucuyuz.org</h1>
        </Grid>
        <Grid item xs={2}>
          <Button
            id="basic-button"
            className={styles.menuButton}
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            endIcon={<LocalPhoneIcon />}
          >
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {/* <MenuItem onClick={handlePhoneClick}> Telefon</MenuItem> */}
            <MenuItem onClick={handleEmailClick}> E-Posta</MenuItem>
            {/* <MenuItem onClick={handleInstagramClick}> Instagram</MenuItem> */}
            {/* <MenuItem onClick={handleWhatsappClick}> Whatsapp</MenuItem> */}
            <MenuItem onClick={handleLocationClick}> Adres</MenuItem>
          </Menu>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HeaderMobile;
