import express, { Request, Response } from 'express';
import { pool } from './db';
import { RowDataPacket } from 'mysql2/promise';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());

app.use(express.json())

app.post("/concierge-login", async (req: Request, res: Response) => {
  const { id, password } = req.body;

  if (!id || !password) {
    return res.status(400).json({ message: "ID and password are required" });
  }

  try {
    const [rows] = await pool.execute<RowDataPacket[]>(
      "SELECT id, password FROM users WHERE id = ? AND password = ?",
      [id, password]
    );

    if ((rows as any).length === 0) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.json({ id: id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

