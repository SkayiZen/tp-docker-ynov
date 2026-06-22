# TP3 - TaskFlow

Application de gestion de tâches composée d'un frontend Nginx, d'une API Node.js et d'un cache Redis.

## Structure

```
SujetTP3/
├── backend/
│   ├── server.js
│   ├── package.json
│   └── Dockerfile
├── frontend/
│   ├── index.html
│   └── Dockerfile
├── docker-compose.yml
├── .env.example
└── .dockerignore
```

## Lancer la stack

```bash
docker compose up --build
```

## URLs

| Service | URL |
|---------|-----|
| Frontend | http://localhost:8080 |
| Backend | http://localhost:3001/health |

## Ports utilisés

| Port | Service |
|------|---------|
| 8080 | Frontend |
| 3001 | Backend |

> Arrêter le TP2 avant de lancer ce TP (conflit sur le port 8080).
> ```bash
> docker compose down
> ```
