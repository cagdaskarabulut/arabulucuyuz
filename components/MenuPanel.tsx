import styles from "./MenuPanel.module.scss";
import { Box, Button, Chip, Container, Grid } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function Menu() {
  function handleMainPageClick() {
    return "";
  }

  return (
    <Container
      className={styles.menuPanelStyle}
      disableGutters={true}
      maxWidth="xl"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 2,
          marginBottom: 2,
          marginLeft: 2,
          marginRight: 2,
          width: "100%",
          overflowX: "scroll",
          button: {
            flex: "none",
          },
        }}
      >
        <Button href={"/"} variant="contained">Hizmetlerimiz</Button>
        <Button href={"/Sorular"} variant="outlined">Sık sorulanlar</Button>
        <Button href={"/Makaleler"} variant="outlined">Makaleler</Button>
        <Button href={"/UcretHesaplama"} variant="outlined">Ücret hesaplama</Button>
        <Button href={"/Duyurular"} variant="outlined">Duyurular</Button>
        <Button href={"/BenKimim"} variant="outlined">Ben kimim</Button>
        <Button href={"/Dosyalarim"} variant="outlined" disabled>Dosyalarım</Button>
        <Button href={"/Formlar"} variant="outlined" disabled>Formlar</Button>
      </Box>
    </Container>
  );
}
