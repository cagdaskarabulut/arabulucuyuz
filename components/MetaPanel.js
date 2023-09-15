import Head from "next/head";
import React, { Component } from "react";

//- Google için meta sayfası
const MetaPanel = ({ title , name , nameContent , description , descriptionContent , keywords , keywordsContent}) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/images/Arabulucu-icon.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name={name} content={nameContent} />
      <meta name={description} content={descriptionContent} />
      <meta name={keywords} content={keywordsContent} /> {/* keyword1, keyword2, keyword3 */}
      <meta name={name} content={nameContent} />
    </Head>
  );
};

export default MetaPanel;
