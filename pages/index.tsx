import styles from "./index.module.scss";
import Head from "next/head";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Box, Button, Chip, Container, Grid } from "@mui/material";
import MetaPanel from "../components/MetaPanel";
import Header from "../components/Header";
import MenuPanel from "../components/MenuPanel";
import { useCallback, useContext, useEffect, useState } from "react";
import { MOBILE_SCREEN_SIZE } from "../constants/GeneralConstants";
import useWindowSize from "@rooks/use-window-size";
import HeaderMobile from "@/components/HeaderMobile";
import SliderPanel from "@/components/SliderPanel";
import FooterPanel from "@/components/FooterPanel";
import MenuPanelMobile from "@/components/MenuPanelMobile";

//- Açılış sayfası , Hizmetlerimiz sayfası
export default function Home() {
  
  const { innerWidth, innerHeight, outerHeight, outerWidth } = useWindowSize();
  const [isMobile, setIsMobile] = useState(false);

  //_ Update when page resolution changes
  useEffect(() => {
    if (innerWidth === null) {
      setIsMobile(false);
    } else {
      setIsMobile(innerWidth<MOBILE_SCREEN_SIZE ? true : false);
    }
  },[innerWidth]);

  const HeaderField = () => {
    if (isMobile) {
      return (
        <HeaderMobile />
      );
    } else {
      return (
        <Header />
      );
    }
  };

  const MenuField = () => {
    if (isMobile) {
      return (
        <MenuPanelMobile />
      );
    } else {
      return (
        <MenuPanel />
      );
    }
  };

  return (
    <div className={styles.indexStyle}>
      <MetaPanel/>
      <HeaderField />
      <MenuField />
      <SliderPanel />
      <FooterPanel />
      
  
      
      {/* 
      <Container maxWidth={false} disableGutters={true} className={styles.menu}>
        <Link href={"/hello"}>Ben kimim</Link>
        <Link href={"/hello"}>Sık sorulan sorular</Link>
        <Link href={"/hello"}>Makaleler</Link>
        <Link href={"/hello"}>Ücret hesaplama</Link>
        <Link href={"/hello"}>Duyurular</Link>
        <Link href={"/hello"}>Hizmetlerimiz </Link>
        <Link href={"/hello"}>İletişim/Başvuru - not kaydet (ileride mail Tılabilir)</Link>
        <Link href={"/hello"}>Dosyalarım - üye olup dosya açanlar dosyalarının durumlarını görecek</Link>
        <Link href={"/hello"}>Kaynaklar/hazır başvuru formları - kullanıcıların ihtiyaç duyacağı formlar</Link>
      </Container>

      <Container maxWidth={false} disableGutters={true}>
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} />
        <Link href={"/hello"}>Go to hello page</Link>
      </Container>

      <Container maxWidth='lg' disableGutters={true}>
        <Grid container rowSpacing={1} style={{ background: '#ff0000' }}>
          <Grid item xs={4}>
            <Link href={"/hello"}>Go to hello page</Link>
          </Grid>
          <Grid item xs={2}>
            asd
          </Grid>
          <Grid item xs={2}>
            asd
          </Grid>x
          <Grid item xs={2}>
            asd
          </Grid>
          <Grid item xs={2}>
            asd
          </Grid>
        </Grid>        
      </Container>

       */}

    </div>
  );
}
