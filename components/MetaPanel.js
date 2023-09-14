import Head from "next/head";
import React, { Component } from "react";

//- Google için meta sayfası
const MetaPanel = ({ title , name , content }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name={name}
        content={content}
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/images/Arabulucu-icon.png" />
    </Head>
  );
};

export default MetaPanel;
