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

//-UcretHesaplama sayfası
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
        title="Arabuluculu ile iletişim"
        descriptionContent="Arabuluculu ile iletişime geç, soru sor, teklif al"
        keywordsContent="arabuluculu ile iletişime geç, arabulucuya soru sor, arabulucudan teklif al, arabulucu ile görüş"
      />
      <PageTemplate content={<MessagePanel/>} />
    </>
  );
}
