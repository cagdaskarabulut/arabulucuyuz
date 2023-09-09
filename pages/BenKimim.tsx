import styles from "./BenKimim.module.scss";
import { Box, Button, Chip, Container, Grid } from "@mui/material";
import MetaPanel from "../components/MetaPanel";
import Header from "../components/Header";
import MenuPanel from "../components/MenuPanel";
import { useCallback, useContext, useEffect, useState } from "react";
import { MOBILE_SCREEN_SIZE } from "../constants/GeneralConstants";
import useWindowSize from "@rooks/use-window-size";
import HeaderMobile from "@/components/HeaderMobile";
import FooterPanel from "@/components/FooterPanel";
import MenuPanelMobile from "@/components/MenuPanelMobile";

//-Ben kimim sayfası
export default function BenKimim() {
  const { innerWidth, innerHeight, outerHeight, outerWidth } = useWindowSize();
  const [isMobile, setIsMobile] = useState(false);

  //_ Update when page resolution changes
  useEffect(() => {
    if (innerWidth === null) {
      setIsMobile(false);
    } else {
      setIsMobile(innerWidth < MOBILE_SCREEN_SIZE ? true : false);
    }
  }, [innerWidth]);

  const HeaderField = () => {
    if (isMobile) {
      return <HeaderMobile />;
    } else {
      return <Header />;
    }
  };

  const MenuField = () => {
    if (isMobile) {
      return <MenuPanelMobile />;
    } else {
      return <MenuPanel />;
    }
  };

  return (
    <div className={styles.indexStyle}>
      <MetaPanel />
      <HeaderField />
      <MenuField />
      <div className={styles.benKimimStyle}>
        <p><b>AV. ARB. ÖZNUR İLHAN KARABULUT</b></p>
        <p>2010 YILINDA MALTEPE ÜNİVERSİTESİ HUKUK FAKÜLTESİNDEN MEZUN OLMASININ ARDINDAN ÖZEL HUKUK ALANINDA ÇALIŞMA HAYATI OLMUŞTUR. 2020 YILINDA ARABULUCULUK DAİRE BAŞKANLIĞI SİCİLİNE KAYIT OLARAK 12511 SİCİL NOLU ARBULUCU OLARAK GÖREV YAPMAYA BAŞLAMIŞTIR.</p>
      </div>
      <FooterPanel />
    </div>
  );
}
