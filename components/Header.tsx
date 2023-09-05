import styles from "./Header.module.scss";
import { Chip, Container, Grid } from "@mui/material";
import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Header = ({  }) => {
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

  return (
    <Container className={styles.header}>
      <Grid 
      container
      columns={20} 
      direction="row"
      justifyContent="center"
      alignItems="center">
        <Grid item xs={16}>
          <h1 className={styles.logoStyle}>Arabulucuyuz.org</h1>
        </Grid>
        {/* <Grid item xs={2}>
          <Chip
            icon={<LocalPhoneIcon />}
            label="Telefon"
            onClick={handlePhoneClick}
          />
        </Grid> */}
        <Grid item xs={2}>
          <Chip
            icon={<EmailIcon />}
            label="E-Posta"
            onClick={handleEmailClick}
          />
        </Grid>
        {/* <Grid item xs={2}>
          <Chip
            icon={<InstagramIcon />}
            label="Instagram"
            onClick={handleInstagramClick}
          />
        </Grid>
        <Grid item xs={2}>
          <Chip
            icon={<WhatsAppIcon />}
            label="Whatsapp"
            onClick={handleWhatsappClick}
          />
        </Grid> */}
        <Grid item xs={2}>
          <Chip
            icon={<LocationOnIcon />}
            label="Adres"
            onClick={handleLocationClick}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;