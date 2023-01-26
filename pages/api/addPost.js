import db from '@/db/db.js';
import format from 'pg-format';
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async function handler(req, res) {
  const { user } = await getSession(req, res);
  if (user.nickname !== 'jkmclendon') {
    res.status(500).send();
  } else {
    let sql = format('INSERT INTO posts (title, img, body, liked) VALUES (%L, %L, %L, 0);', req.body.title, req.body.img, req.body.body)
    await db.query(sql)
    res.status(201).send();
  }
});