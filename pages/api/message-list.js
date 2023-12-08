import { sql } from '@vercel/postgres';
 
export default async function handler(request, response) {
  const message_arabulucu = await sql`SELECT id, name, email, phonenumber, content
	FROM message_arabulucu;`;
  return response.status(200).json({ message_arabulucu });
}