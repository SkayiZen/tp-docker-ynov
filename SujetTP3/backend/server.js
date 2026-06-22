const express = require('express');
const Redis = require('ioredis');

const app = express();
const PORT = process.env.PORT || 3001;

const redis = new Redis({
  host: process.env.REDIS_HOST || 'localhost',
  port: process.env.REDIS_PORT || 6379,
});

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') { res.sendStatus(204); return; }
  next();
});

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/tasks', async (req, res) => {
  try {
    const data = await redis.hgetall('tasks');
    const tasks = data ? Object.values(data).map(t => JSON.parse(t)) : [];
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/tasks', async (req, res) => {
  try {
    const { title } = req.body;
    if (!title) return res.status(400).json({ error: 'title requis' });
    const task = { id: Date.now().toString(), title, created_at: new Date().toISOString() };
    await redis.hset('tasks', task.id, JSON.stringify(task));
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/tasks/:id', async (req, res) => {
  try {
    await redis.hdel('tasks', req.params.id);
    res.json({ deleted: req.params.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`TaskFlow backend démarré sur le port ${PORT}`);
});
