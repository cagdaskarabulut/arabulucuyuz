import styles from "./MenuPanelMobile.module.scss";
import { Box, Button, Chip, Container, Grid, Menu, MenuItem } from "@mui/material";
import Link from "next/link";
import React from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function MenuPanelMobile() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.menuPanelStyle}>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        fullWidth={true}
      >
        Menü
      </Button>
      <Menu
       className={styles.menuStyle}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        
        <a href={"/Sorular"}> <MenuItem href={"/"}>Hizmetlerimiz</MenuItem> </a>
        <a href={"/Sorular"}>  <MenuItem>Sık sorulanlar</MenuItem></a>
        <a href={"/Makaleler"}>  <MenuItem>Makaleler</MenuItem></a>
        <a href={"/UcretHesaplama"}><MenuItem>Ücret hesaplama</MenuItem></a>
        <a href={"/Duyurular"}><MenuItem>Duyurular</MenuItem></a>
        <a href={"/BenKimim"}><MenuItem>Ben kimim</MenuItem></a>
        <a href={"/Dosyalarim"}><MenuItem disabled>Dosyalarım</MenuItem></a>
        <a href={"/Formlar"}><MenuItem disabled>Formlar</MenuItem></a>

      </Menu>
    </div>
  );
}