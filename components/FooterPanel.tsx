import styles from "./FooterPanel.module.scss";
import { Chip, Container, Grid } from "@mui/material";
import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const FooterPanel = () => {

  return (
      <Container
      className={styles.footerStyle}
      maxWidth="xl"
      
    >
      <Grid 
      container
      columns={20} 
      padding={2}
      direction="row"
      justifyContent="center"
      alignItems="center">
        <Grid item xs={10}>
          <h4 className={styles.logoStyle}>© Copyright 2023 Arabulucuyuz.org . Tasarım Karabulut Yazılım. Tüm Hakları Saklıdır.</h4>
        </Grid>
        <Grid item xs={10}>
          Bu sitede paylaşılan bilgiler yalnızca bilgilendirme amaçlı olup, Türkiye Cumhuriyeti Barolar Birliği’nin ilgili düzenlemeleri uyarınca reklam, teklif, hukuki öneri veya danışmanlık teşkil etmez. 
          Sitede sunulan bilgiler hakkında Arabulucuyuz.org sitesi sorumluluk kabul etmez.
          Bu sitede paylaşılan bilgiler,  ve sair veriler  Arabulucuyuz.org'a ait olup, büronun yazılı izni olmaksızın kullananlar hakkında yasal işlem yapılır.
        </Grid>
        
      </Grid>
    </Container>
  );
};

export default FooterPanel;