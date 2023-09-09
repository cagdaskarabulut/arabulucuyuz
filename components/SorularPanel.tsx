import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import styles from "./SorularPanel.module.scss";
import { Grid } from "@mui/material";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";

export default class SorularPanel extends Component {
  render() {
    return (
      <div className={styles.sorularPanelStyle}>
        <Grid
          spacing={2}
          container
          direction="row"
          justifyContent="start"
          alignItems="start"
          columns={16}
        >
          <Grid item xs={8}>
            <p>
              <QuestionAnswerIcon />
              <b>ARABULUCULUĞA ELVERİŞLİ ALANLAR NELERDİR?</b> <br />
              Tarafların üzerinde serbestçe tasarruf edebildikleri her özel
              hukuk uyuşmazlığı için arabuluculuğa gidilebilir. Tarafların sulh
              olabildikleri özel hukuk uyuşmazlıkları arabuluculuğa
              elverişlidir, şeklinde de ifade edebiliriz. Arabuluculuğa
              elverişli uyuşmazlıklar, yabancılık unsuru da taşıyabilir.
            </p>
            <p>
              <QuestionAnswerIcon /> <b>ARABULUCU NASIL SEÇİLİR?</b> <br />
              Taraflar arabulucuyu kendileri seçebilirler. Taraflar arabulucunun
              kim olacağı konusunda anlaşmaya varamazlar ise, dava şartı
              arabuluculukta arabulucu, adliyelerdeki arabuluculuk bürolarındaki
              görevli personel tarafından sicile kayıtlı arabulucular
              listesinden atanır.
            </p>
            <p>
              <QuestionAnswerIcon /> <b>ARABULUCU KİMDİR?</b> <br />
              Arabulucu, taraflar arasındaki çatışmanın çözümüne yardımcı olmak
              amacıyla arabuluculuk sürecini idare eden ve arabuluculuk
              yöntemlerini bilip uygulayabilen tarafsız gerçek kişidir.
            </p>
          </Grid>
          <Grid item xs={8}>
            <p>
              <QuestionAnswerIcon />
              <b>ARABULUCU İLE AVUKAT ARASINDAKİ FARKLAR NELERDİR?</b> <br />
              Avukat, hukuki ilişkilerin düzenlenmesi ve hukuki uyuşmazlıkların
              çözümünde bilgi ve tecrübesini adaletin hizmetine ve kişilerin
              yararlanmasına sunan kimsedir. “Avukat” uyuşmazlık taraflarından
              birini temsil eder; onun hak ve menfaatlerinin korunmasına
              yardımcı olur; dolayısıyla taraflıdır. “Arabulucu” ise
              uyuşmazlığın çözümüne yardımcı olur, tarafı temsil etmez;
              tarafsızdır. Avukat hukuki bilgisi ile taraflara hizmet sunarken
              arabulucu, tarafa hukuki açından görüş vermez, yol göstermez.
              Ancak bu konuda bir ihtiyaç olması hâlinde, ihtiyaç duyan
              taraflara bir avukata başvurarak yasal tavsiye almalarını
              önerebilir
            </p>
            <p>
              <QuestionAnswerIcon />
              <b>ARABULUCU İLE AVUKAT ARASINDAKİ FARKLAR NELERDİR?</b> <br />
              Taraflar arabuluculuk sürecinin sonunda bir anlaşmaya varırlarsa
              bu anlaşma taraflar için bağlayıcı olmaktadır. Anlaşmanın icra
              edilebilirliğine ilişkin şerh verilmesi, Sulh Hukuk Mahkemesinden
              talep edilebilir. Sulh Hukuk Mahkemesinden alınan icra
              edilebilirlik şerhinden sonra, ilgili karar mahkeme kararı
              niteliğini kazanır. Arabuluculuk anlaşma belgesindeki
              yükümlülükler yerine getirilmezse ifa edilmezse, söz konusu karar
              icra marifetiyle yerine getirtilir. Tarafların ve avukatlarının
              birlikte imzaladığı arabuluculuk anlaşma belgeleri mahkemeden şerh
              alınmasına gerek olmadan, mahkeme kararı gibi icraya konulabilir.
            </p>
          </Grid>
        </Grid>
      </div>
    );
  }
}