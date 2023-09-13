import styles from "./FooterPanel.module.scss";
import { Grid } from "@mui/material";
import React from "react";
import { useCallback, useContext, useEffect, useState } from "react";
import useWindowSize from "@rooks/use-window-size";
import { MOBILE_SCREEN_SIZE } from "../constants/GeneralConstants";

// import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
// import EmailIcon from "@mui/icons-material/Email";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import LocationOnIcon from "@mui/icons-material/LocationOn";

const FooterPanel = () => {
  //_ MobilePart
  const { innerWidth } = useWindowSize();
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (innerWidth === null) {
      setIsMobile(false);
    } else {
      setIsMobile(innerWidth < MOBILE_SCREEN_SIZE);
    }
  }, [innerWidth]);

  return (
    <div className={styles.footerStyle}>
      <Grid
        container
        columns={12}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={isMobile ? 12 : 6}>
          <div className={styles.footerContentStyle}>
            © Copyright 2023 Arabulucuyuz.org.
            {isMobile ? " " : <br />}
            Tüm Hakları Saklıdır.
            {isMobile ? " " : <br />}
            Tasarım Karabulut Yazılım.
          </div>
        </Grid>
        <Grid item xs={isMobile ? 12 : 6}>
          <div className={styles.footerContentStyle}>
            Bu sitede paylaşılan bilgiler yalnızca bilgilendirme amaçlı olup,
            Türkiye Cumhuriyeti Barolar Birliği’nin ilgili düzenlemeleri
            uyarınca reklam, teklif, hukuki öneri veya danışmanlık teşkil etmez.
            Sitede sunulan bilgiler hakkında Arabulucuyuz.org sitesi sorumluluk
            kabul etmez. Bu sitede paylaşılan bilgiler, ve sair veriler
            Arabulucuyuz.org'a ait olup, büronun yazılı izni olmaksızın
            kullananlar hakkında yasal işlem yapılır.
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default FooterPanel;
