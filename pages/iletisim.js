import MetaPanel from "../components/MetaPanel";
import MessageForm from "@/components/MessageForm";
import PageTemplate from "@/components/PageTemplate";
import MyBreadcrumbs from "@/components/tools/MyBreadcrumbs";
import styles from "./iletisim.module.scss";
import { Button, Grid, TextField } from "@material-ui/core";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import MyResultMessage from "@/components/tools/MyResultMessage";
import InputMask from "react-input-mask";
import classNames from "classnames";

//-Ucret-Hesaplama sayfası
export default function iletisim() {

  const MessagePanel = () => {
    return (
    <>
      <MyBreadcrumbs
        link1Title="İletişim"
        link1Href="/iletisim"
        activePageNumber="1"
      />
      <h2 className={styles.titleStyle}>İletişim</h2>
      <MessageForm />
      
      </>
    )
  }

  return (
    <>
      <MetaPanel
        title="Avukat Arabulucu Öznur İlhan Karabulut - İletişim"
        descriptionContent="Avukat Arabulucu Öznur İlhan Karabulut ile iletişime geçmek için bu sayfayı kullanın. Deneyimli hukukçu ve arabulucu olan Öznur İlhan Karabulut'a hukuki sorunlarınızı iletebilirsiniz. İhtiyacınıza yönelik hukuki destek almak için bize ulaşın."
        keywordsContent="Avukat, Arabulucu, İletişim, Hukuki Destek, İletişim Bilgileri, Hukuk Danışmanlığı,Arabuluculuk Danışmanlığı, Uzman Arabulucu, Hukuk Danışman, Hukuki İletişim, Hukukçu"
      />
      <PageTemplate content={<MessagePanel/>} />
    </>
  );
}
