import db from '@/db/db.js';

export default async function handler (req, res) {
  let numOfPosts = await db.query('SELECT COUNT(*) FROM posts;')
  let results = await db.query(`SELECT * FROM posts ORDER BY id DESC LIMIT 5;`);
  res.send({count: numOfPosts.rows[0].count, rows: results.rows})
}