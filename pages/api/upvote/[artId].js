import db from '@/db/db.js';

export default async function handler (req, res) {
  const { artId } = req.query;
  await db.query(`UPDATE posts SET liked = liked + 1 WHERE id = ${artId};`)
  res.status(200).send();
}