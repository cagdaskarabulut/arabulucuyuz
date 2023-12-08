import { sql } from '@vercel/postgres';
 
export default async function handler(request, response) {
  try {
    console.log(request.body.name);
    const name = request.body.name;
    const email = request.body.email;
    let phonenumber = request.body.phonenumber;
    phonenumber= phonenumber.replace("(", "");
    phonenumber= phonenumber.replace(")", "");
    const content = request.body.content;

    console.log(name, email, phonenumber, content);

    // if (!name || !email || !phonenumber || content) throw new Error('Message fields required');
    await sql`INSERT INTO message_arabulucu (name, email, phonenumber, content) VALUES (${name}, ${email}, ${phonenumber}, ${content});`;
    return response.status(200).json("successfully saved");
  } catch (error) {
    return response.status(500).json({ error });
  }
 
  // const message_arabulucu = await sql`SELECT * FROM message_arabulucu;`;
  // return response.status(200).json({ message_arabulucu });
}