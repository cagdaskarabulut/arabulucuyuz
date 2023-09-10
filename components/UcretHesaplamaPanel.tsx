import React, { Component } from "react";
import Image from "next/image";
import styles from "./UcretHesaplamaPanel.module.scss";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Switch,
  TextField,
} from "@mui/material";
import { useCallback, useContext, useEffect, useState } from "react";
import { Label } from "@mui/icons-material";
import { NumberInput } from "@mui/base/Unstable_NumberInput/NumberInput";
export default function UcretHesaplamaPanel() {
  const [tip, setTip] = useState("1");
  const [arabulucuSayisi, setArabulucuSayisi] = useState("1");
  const [tarafSayisi, setTarafSayisi] = useState("2");
  const [anlasilanUcret, setAnlasilanUcret] = useState("0");
  const [arabulucuyaOdenecekMiktar, setArabulucuyaOdenecekMiktar] = useState(0);
  const handleChange = (event: SelectChangeEvent) => {
    setTip(event.target.value as string);
  };

  const handleArabulucuSayisiChange = (event: SelectChangeEvent) => {
    setArabulucuSayisi(event.target.value as string);
  };

  const handleTarafSayisiChange = (event: SelectChangeEvent) => {
    setTarafSayisi(event.target.value as string);
  };

  const handleAnlasilanUcretChange = (event: SelectChangeEvent) => {
    setAnlasilanUcret(event.target.value as string);
  };
  
  const handleHesapla = () => {
    let aktifAnlasilanUcretKalan = anlasilanUcret;
    if (tip==="1"){//İş Hukuku Uyuşmazlıkları 2023

    } else if (tip==="2"){//Ticari Uyuşmazlıklar 2023

    } else if (tip==="3"){//Tüketici Uyuşmazlıklar 2023

    }
    
    console.log('theme');
  };

  return (
    <div className={styles.ucretHesaplamaPanelStyle}>
      <Grid
        spacing={2}
        container
        direction="row"
        justifyContent="start"
        alignItems="start"
        columns={20}
      >
        <Grid item xs={20} columns={12}>
          <Grid item xs={12}>
            <span style={{ fontWeight: "bold" }}>Uyuşmazlık Tipi</span>
          </Grid>
          <Grid item xs={12}>
            <Select
              id="tipId"
              value={tip}
              label="Tip"
              onChange={handleChange}
              variant="standard"
              className={styles.tipMenu}
            >
              <MenuItem value={1} className={styles.tipMenu}>
                İş Hukuku Uyuşmazlıkları 2023
              </MenuItem>
              <MenuItem value={2} className={styles.tipMenu}>
                Ticari Uyuşmazlıklar 2023
              </MenuItem>
              <MenuItem value={3} className={styles.tipMenu}>
                Tüketici Uyuşmazlıklar 2023
              </MenuItem>
            </Select>
          </Grid>
          <br />
          <br />
          <Grid item xs={12}>
            <span style={{ fontWeight: "bold" }}>Arabulucu Sayısı</span>
          </Grid>
          <Grid item xs={12}>
            <Select
              id="arabulucuSayisiId"
              value={arabulucuSayisi}
              label="arabulucuSayisi"
              onChange={handleArabulucuSayisiChange}
              variant="standard"
              className={styles.tipMenu}
            >
              <MenuItem value={1} className={styles.tipMenu}>
                Bir Arabulucu
              </MenuItem>
              <MenuItem value={2} className={styles.tipMenu}>
                Birden Fazla Arabulucu
              </MenuItem>
            </Select>
          </Grid>
          <br />
          <br />
          <Grid item xs={12}>
            <span style={{ fontWeight: "bold" }}>Taraf Sayısı</span>
          </Grid>
          <Grid item xs={12}>
            <Select
              id="tarafSayisiId"
              value={tarafSayisi}
              label="tarafSayisi"
              onChange={handleTarafSayisiChange}
              variant="standard"
              className={styles.tipMenu}
            >
              <MenuItem value={2} className={styles.tipMenu}>
                2 Taraflı
              </MenuItem>
              <MenuItem value={3} className={styles.tipMenu}>
                3-5 Taraflı
              </MenuItem>
              <MenuItem value={6} className={styles.tipMenu}>
                6-10 Taraflı
              </MenuItem>
              <MenuItem value={11} className={styles.tipMenu}>
                11 ve Üstü
              </MenuItem>
            </Select>
          </Grid>
          <br />
          <br />
          <Grid item xs={12}>
            <span style={{ fontWeight: "bold" }}>Anlaşmaya Varılan Ücret</span>
          </Grid>
          <Grid item xs={12}>
            <TextField className={styles.tipMenu} variant="standard" value={anlasilanUcret} onChange={handleAnlasilanUcretChange}/>
          </Grid>
          <br />
          <br />
          <Grid item xs={12}>
            <Button onClick={() => handleHesapla}
            className={styles.pageButtonStyle}>
              Hesapla
            </Button>
            
            
          </Grid>
          <Grid item xs={12}>
            <br />
            {arabulucuyaOdenecekMiktar>0 && (
            <span style={{ padding:"5px", borderColor:"#27ae60",borderStyle:"solid",color:"rgb(79 86 101)", textDecoration:"underline", display: arabulucuyaOdenecekMiktar>0 ? '':'none' }}>
              Arabulucuya Ödenecek Miktar : 
              <b style={{fontWeight: "bold",color:"#27ae60"}}>{arabulucuyaOdenecekMiktar}</b> </span>
            )}
          </Grid>
          
        </Grid>


      </Grid>
      {/* <InputLabel id="demo-simple-select-label">Uyuşmazlık Tipi</InputLabel> */}
    </div>
  );
}
