// import { unsubscribe } from 'diagnostics_channel';
import { collection, onSnapshot, orderBy, query } from '@firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../firebase';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const MessageList = () => {
  const [messages, setMessages] = useState([]);
  const timestamp = Date.now(); // This would be the timestamp you want to format

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

<TableContainer >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>İsim</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Telefon</TableCell>
            <TableCell align="right">Yaratılma Tarihi</TableCell>
            <TableCell align="right">Not</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {messages.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                {row.name}
                </TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.phoneNumber}</TableCell>
                <TableCell align="right">
                {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp)}
                </TableCell>
                <TableCell align="right">{row.content}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>

    {/* {messages.map(message => <div key={message.id}>{message.content}</div>)} */}


    </div>
  )
}

export default MessageList;