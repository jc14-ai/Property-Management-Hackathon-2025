import express, { Request, Response } from 'express';
import { pool } from './db';
import { RowDataPacket } from 'mysql2/promise';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/users", async (req: Request, res: Response) => {
  try {
    const [rows] = await pool.execute<RowDataPacket[]>('SELECT * FROM users;');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
