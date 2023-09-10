import styles from "./Hizmetler.module.scss";
import { Box, Button, Chip, Container, Grid } from "@mui/material";
import MetaPanel from "../components/MetaPanel";
import Header from "../components/Header";
import MenuPanel from "../components/MenuPanel";
import { useCallback, useContext, useEffect, useState } from "react";
import { MOBILE_SCREEN_SIZE } from "../constants/GeneralConstants";
import useWindowSize from "@rooks/use-window-size";
import SliderPanel from "@/components/Arabuluculuk";
import FooterPanel from "@/components/FooterPanel";
import MenuPanelMobile from "@/components/MenuPanelMobile";

//-Makaleler sayfası
export default function Hizmetler() {
  
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
      return <></>;
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
      <div className={styles.hizmetlerStyle}>
        <ul>
          <li>İŞÇİ İŞVEREN UYUŞMAZLIKLARINDA ARABULUCULUK</li>
<li>TİCARİ UYUŞMAZLIKLARDA ARABULUCULUK</li>
<li>TÜKETİCİ UYUŞMAZLIKLARINDA ARABULUCULUK</li>
<li>TARIMSAL ÜRETİM SÖZLEŞMESİNDEN KAYNAKLI UYUŞMAZLIKLARDA ARABULUCULUK</li>
<li>KİRA HUKUKU ANLAŞMAZLIKLARINDAN KAYNAKLI UYUŞMAZLIKLARDA ARABULUCULUK</li>
        </ul>
        
      </div>
      
      

      <FooterPanel />
    </div>
  );
}
