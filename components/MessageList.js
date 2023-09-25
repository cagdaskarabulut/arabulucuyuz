// import { unsubscribe } from 'diagnostics_channel';
import { collection, onSnapshot, orderBy, query } from '@firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../firebase';

const MessageList = () => {
  const [messages, setMessages] = useState([]);

  useEffect(()=>{
    const collectionRef = collection(db,"Messages");

    const q = query(collectionRef, orderBy("creationDate"));

    const unsubscribe = onSnapshot(q, (querySnapshot)  => {
      setMessages(querySnapshot.docs.map(doc=>({...doc.data(), id: doc.id, creationDate: doc.data().creationDate?.toDate().getTime()})));
    });
    return unsubscribe;
  },[]);

  return (
    <div>
      test test test
      <br />
      {messages.map(message => <div key={message.id}>{message.content}</div>)}
    </div>
  )
}

export default MessageList;