import db from '@/db/db.js';

export default async function handler (req, res) {
  const { id } = req.query;
  let result = await db.query(`SELECT id, title, body, img, TO_CHAR(my_date, 'MM-DD-YYYY') date, liked FROM posts WHERE id = ${id};`);
  res.status(200).send(result.rows[0])
}