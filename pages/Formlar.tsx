import styles from "./index.module.scss";
import MetaPanel from "../components/MetaPanel";
import Header from "../components/Header";
import MenuPanel from "../components/MenuPanel";
import { useCallback, useContext, useEffect, useState } from "react";
import { MOBILE_SCREEN_SIZE } from "../constants/GeneralConstants";
import useWindowSize from "@rooks/use-window-size";
import HeaderMobile from "@/components/HeaderMobile";
import FooterPanel from "@/components/FooterPanel";
import MenuPanelMobile from "@/components/MenuPanelMobile";

//-Formlar sayfası
export default function UcretHesaplama() {
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
      <p>Formlar</p>
      <FooterPanel />
    </div>
  );
}
