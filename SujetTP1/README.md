# TP1 — Image Docker Node.js

Application Node.js simple permettant d'envoyer et d'afficher des messages.

## Structure

```
SujetTP1/
├── Dockerfile
├── .dockerignore
├── index.js
└── package.json
```

## Lancer l'application

```bash
docker build -t tp1:corrige .
docker run --rm -p 3000:3000 tp1:corrige
```

Ouvrir : http://localhost:3000

## Ports utilisés

| Port | Service |
|------|---------|
| 3000 | Application |

> Arrêter le TP2 avant de lancer ce TP (conflit sur le port 3000).
> ```bash
> docker compose down
> ```
