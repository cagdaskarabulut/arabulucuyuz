import React, { useEffect, useState } from "react";
import MessageList from "../components/MessageList";

const AdminPanel = () => {
  return (
    <div>
      <h1>Hoşgeldin Öznur, </h1>
      <br />
      <h3>Mesaj Listesi</h3>
      <MessageList />
    </div>
  );
};

export default AdminPanel;
