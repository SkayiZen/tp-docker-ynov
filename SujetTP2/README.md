# TP2 — Docker Compose : stack multi-services

Stack composée d'un frontend Nginx, d'une API Node.js, d'une base PostgreSQL et d'Adminer.

## Structure

```
SujetTP2/
├── api/
│   ├── index.js
│   ├── package.json
│   └── Dockerfile
├── frontend/
│   ├── index.html
│   └── Dockerfile
├── docker-compose.yml
└── .env
```

## Configuration

Créer un fichier `.env` à la racine :

```
DB_PASSWORD=changeme
```

## Lancer la stack

```bash
docker compose up --build
```

## URLs

| Service | URL |
|---------|-----|
| Frontend | http://localhost:8080 |
| API | http://localhost:3000/health |
| Adminer | http://localhost:8081 |

## Connexion Adminer

| Champ | Valeur |
|-------|--------|
| Système | PostgreSQL |
| Serveur | database |
| Utilisateur | tp2user |
| Mot de passe | valeur de `DB_PASSWORD` |
| Base | tp2db |

## Ports utilisés

| Port | Service |
|------|---------|
| 3000 | API |
| 8080 | Frontend |
| 8081 | Adminer |

> Arrêter le TP1 et le TP3 avant de lancer ce TP (conflits sur les ports 3000 et 8080).
> ```bash
> docker stop $(docker ps -q)
> ```
