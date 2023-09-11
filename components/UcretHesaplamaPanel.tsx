import React, { ChangeEvent } from "react";
import styles from "./UcretHesaplamaPanel.module.scss";
import {
  Button,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { useState } from "react";

export default function UcretHesaplamaPanel() {
  const [tip, setTip] = useState("1");
  const [arabulucuSayisi, setArabulucuSayisi] = useState("1");
  const [tarafSayisi, setTarafSayisi] = useState("2");
  const [anlasilanUcret, setAnlasilanUcret] = useState("0");
  const [arabulucuyaOdenecekMiktar, setArabulucuyaOdenecekMiktar] =
    useState("0");

  const handleChange = (event: SelectChangeEvent) => {
    setTip(event.target.value as string);
    setArabulucuyaOdenecekMiktar("0");
  };

  const handleArabulucuSayisiChange = (event: SelectChangeEvent) => {
    setArabulucuSayisi(event.target.value as string);
    setArabulucuyaOdenecekMiktar("0");
  };

  const handleTarafSayisiChange = (event: SelectChangeEvent) => {
    setTarafSayisi(event.target.value as string);
    setArabulucuyaOdenecekMiktar("0");
  };

  const handleAnlasilanUcretChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAnlasilanUcret(event.target.value as string);
    setArabulucuyaOdenecekMiktar("0");
  };

  const anlasilanUcretUzerindenArabulucuOdemesiBul = () => {
    try {
      let aktifAnlasilanUcretKalan = !isNaN(+anlasilanUcret)
        ? Number(anlasilanUcret)
        : 0;
      let sonuc = 0;
      let oran = 0;
      if (aktifAnlasilanUcretKalan > 0) {
        oran = arabulucuSayisi == "1" ? 6 : 9;
        if (aktifAnlasilanUcretKalan > 100000) {
          sonuc = (100000 * oran) / 100;
          aktifAnlasilanUcretKalan = aktifAnlasilanUcretKalan - 100000;
        } else {
          sonuc = (aktifAnlasilanUcretKalan * oran) / 100;
          aktifAnlasilanUcretKalan = 0;
        }

        oran = arabulucuSayisi == "1" ? 5 : 7.5;
        if (aktifAnlasilanUcretKalan > 160000) {
          sonuc = sonuc + (160000 * oran) / 100;
          aktifAnlasilanUcretKalan = aktifAnlasilanUcretKalan - 160000;
        } else {
          sonuc = sonuc + (aktifAnlasilanUcretKalan * oran) / 100;
          aktifAnlasilanUcretKalan = 0;
        }

        oran = arabulucuSayisi == "1" ? 4 : 6;
        if (aktifAnlasilanUcretKalan > 260000) {
          sonuc = sonuc + (260000 * oran) / 100;
          aktifAnlasilanUcretKalan = aktifAnlasilanUcretKalan - 260000;
        } else {
          sonuc = sonuc + (aktifAnlasilanUcretKalan * oran) / 100;
          aktifAnlasilanUcretKalan = 0;
        }

        oran = arabulucuSayisi == "1" ? 3 : 4.5;
        if (aktifAnlasilanUcretKalan > 520000) {
          sonuc = sonuc + (520000 * oran) / 100;
          aktifAnlasilanUcretKalan = aktifAnlasilanUcretKalan - 520000;
        } else {
          sonuc = sonuc + (aktifAnlasilanUcretKalan * oran) / 100;
          aktifAnlasilanUcretKalan = 0;
        }

        oran = arabulucuSayisi == "1" ? 2 : 3;
        if (aktifAnlasilanUcretKalan > 1560000) {
          sonuc = sonuc + (1560000 * oran) / 100;
          aktifAnlasilanUcretKalan = aktifAnlasilanUcretKalan - 1560000;
        } else {
          sonuc = sonuc + (aktifAnlasilanUcretKalan * oran) / 100;
          aktifAnlasilanUcretKalan = 0;
        }

        oran = arabulucuSayisi == "1" ? 1.5 : 2.5;
        if (aktifAnlasilanUcretKalan > 2080000) {
          sonuc = sonuc + (2080000 * oran) / 100;
          aktifAnlasilanUcretKalan = aktifAnlasilanUcretKalan - 2080000;
        } else {
          sonuc = sonuc + (aktifAnlasilanUcretKalan * oran) / 100;
          aktifAnlasilanUcretKalan = 0;
        }

        oran = arabulucuSayisi == "1" ? 1 : 1.5;
        if (aktifAnlasilanUcretKalan > 4160000) {
          sonuc = sonuc + (4160000 * oran) / 100;
          aktifAnlasilanUcretKalan = aktifAnlasilanUcretKalan - 4160000;
        } else {
          sonuc = sonuc + (aktifAnlasilanUcretKalan * oran) / 100;
          aktifAnlasilanUcretKalan = 0;
        }

        oran = arabulucuSayisi == "1" ? 0.5 : 1;
        if (aktifAnlasilanUcretKalan > 0) {
          //8840000
          sonuc = sonuc + (aktifAnlasilanUcretKalan * oran) / 100;
          aktifAnlasilanUcretKalan = 0;
        }
      }
      return sonuc;
    } catch (error) {
      return 0;
    }
  };

  const handleHesapla = () => {
    // setArabulucuyaOdenecekMiktar('0');
    let sonuc = anlasilanUcretUzerindenArabulucuOdemesiBul();

    if (sonuc > 0) {
      if (tip == "1") {
        //İş Hukuku Uyuşmazlıkları 2023
        if (tarafSayisi == "2" && sonuc < 1600) {
          sonuc = 1600;
        } else if (tarafSayisi == "3" && sonuc < 1680) {
          sonuc = 1680;
        } else if (tarafSayisi == "6" && sonuc < 1800) {
          sonuc = 1800;
        } else if (tarafSayisi == "11" && sonuc < 1920) {
          sonuc = 1920;
        }
      } else if (tip == "2") {
        //Ticari Uyuşmazlıklar 2023
        if (tarafSayisi == "2" && sonuc < 3120) {
          sonuc = 3120;
        } else if (tarafSayisi == "3" && sonuc < 3200) {
          sonuc = 3200;
        } else if (tarafSayisi == "6" && sonuc < 3280) {
          sonuc = 3280;
        } else if (tarafSayisi == "11" && sonuc < 3360) {
          sonuc = 3360;
        }
      } else if (tip == "3") {
        //Tüketici Uyuşmazlıklar 2023
        if (tarafSayisi == "2" && sonuc < 1600) {
          sonuc = 1600;
        } else if (tarafSayisi == "3" && sonuc < 1680) {
          sonuc = 1680;
        } else if (tarafSayisi == "6" && sonuc < 1800) {
          sonuc = 1800;
        } else if (tarafSayisi == "11" && sonuc < 1920) {
          sonuc = 1920;
        }
      } else if (tip == "4") {
        //Diğer Tür Uyuşmazlıklar 2023
        if (tarafSayisi == "2" && sonuc < 1920) {
          sonuc = 1920;
        } else if (tarafSayisi == "3" && sonuc < 2000) {
          sonuc = 2000;
        } else if (tarafSayisi == "6" && sonuc < 2080) {
          sonuc = 2080;
        } else if (tarafSayisi == "11" && sonuc < 2160) {
          sonuc = 2160;
        }
      }

      setArabulucuyaOdenecekMiktar("" + sonuc);

      console.log("tip" + tip);
      console.log("arabulucuSayisi" + arabulucuSayisi);
      console.log("tarafSayisi" + tarafSayisi);
      console.log("anlasilanUcret" + anlasilanUcret);
      console.log("sonuc" + sonuc);
    }
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
              <MenuItem value={4} className={styles.tipMenu}>
                Diğer Uyuşmazlıklar 2023
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
            <TextField
              className={styles.tipMenu}
              variant="standard"
              value={anlasilanUcret}
              onChange={handleAnlasilanUcretChange}
            />
          </Grid>
          <br />
          <br />
          <Grid item xs={12}>
            <Button onClick={handleHesapla} className={styles.pageButtonStyle}>
              Hesapla
            </Button>
          </Grid>
          <Grid item xs={12}>
            <br />
            {/* {(!isNaN(+arabulucuyaOdenecekMiktar) ? Number(arabulucuyaOdenecekMiktar) : 0) > 0 && ( */}
            <span
              style={{
                padding: "5px",
                borderColor: "#27ae60",
                borderStyle: "solid",
                color: "rgb(79 86 101)",
                textDecoration: "underline",
                display:
                  (!isNaN(+arabulucuyaOdenecekMiktar)
                    ? Number(arabulucuyaOdenecekMiktar)
                    : 0) > 0
                    ? ""
                    : "none",
              }}
            >
              Arabulucuya Ödenecek Miktar :
              <b style={{ fontWeight: "bold", color: "#27ae60" }}>
                {arabulucuyaOdenecekMiktar}
              </b>{" "}
            </span>
            {/* )} */}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
