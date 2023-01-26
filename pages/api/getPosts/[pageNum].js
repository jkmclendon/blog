import db from '@/db/db.js';

export default async function handler (req, res) {
  const { pageNum } = req.query;
  let numOfPosts = await db.query('SELECT COUNT(*) FROM posts;')
  let results = await db.query(`SELECT id, title, body, img, TO_CHAR(my_date, 'MM-DD-YYYY') date, liked FROM posts ORDER BY id DESC LIMIT 5 OFFSET ${(pageNum - 1) * 5};`);
  res.send({count: numOfPosts.rows[0].count, rows: results.rows})
}