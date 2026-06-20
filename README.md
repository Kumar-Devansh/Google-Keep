# Google Keep Clone

A lightweight Google Keep–style note-taking web app with user auth, labels, archive/trash, and rich note editing.

---

## Key Features

- **User Authentication:** Register and login with JWT-based auth.
- **Notes CRUD:** Create, read, update, delete notes with colors and labels.
- **Archive & Trash:** Move notes to archive or trash and restore them.
- **Search & Filter:** Search notes and filter by label or color.
- **Responsive UI:** Built with Vite + React for fast, reactive frontend.

---

## Tech Stack

- **Backend:** Node.js, Express, MongoDB (Mongoose)
- **Frontend:** React, Vite, CSS modules

---

## Repo Structure (high level)

- [backend](backend/) — Express server, routes, controllers, models
  - [backend/server.js](backend/server.js)
  - [backend/config/db.js](backend/config/db.js)
  - [backend/models/User.js](backend/models/User.js)
  - [backend/models/Note.js](backend/models/Note.js)
- [frontend](frontend/) — Vite + React app
  - [frontend/src/App.jsx](frontend/src/App.jsx)
  - [frontend/src/pages/Dashboard.jsx](frontend/src/pages/Dashboard.jsx)
  - [frontend/src/components](frontend/src/components)

---

## Prerequisites

- Node.js (v16+ recommended)
- npm or yarn
- MongoDB instance (local or Atlas)

---

## Environment Variables

Create a `.env` file in the `backend` folder with at least:

- `MONGO_URI` — MongoDB connection string
- `JWT_SECRET` — secret for signing JWTs
- `PORT` — optional server port (default 5000)

Example `.env` (do NOT commit real secrets):

```
MONGO_URI=mongodb+srv://<user>:<pass>@cluster0.mongodb.net/googlekeep
JWT_SECRET=your_jwt_secret_here
PORT=5000
```

---

## Install & Run (dev)

Backend (from repo root):

```bash
cd backend
npm install
# start server (use nodemon if available)
npm run dev  # or: node server.js
```

Frontend (from repo root):

```bash
cd frontend
npm install
npm run dev
```

Open the frontend dev server (Vite) URL shown in the terminal.

---

## API Overview

Common routes (adjust base path if different):

- `POST /api/auth/register` — register new user
- `POST /api/auth/login` — authenticate and receive JWT
- `GET /api/notes` — list notes (auth)
- `POST /api/notes` — create note (auth)
- `PUT /api/notes/:id` — update note (auth)
- `DELETE /api/notes/:id` — delete note (auth)
- `POST /api/notes/:id/archive` — archive/restore (if implemented)

See controller implementations in [backend/controllers](backend/controllers/) for exact behaviors.

---

## Development Notes

- The backend database connection is configured in [backend/config/db.js](backend/config/db.js).
- Authentication middleware lives in [backend/middleware/authMiddleware.js](backend/middleware/authMiddleware.js).
- Frontend API clients are in [frontend/src/api](frontend/src/api).

Recommended workflow:

1. Start MongoDB (or ensure Atlas is reachable).
2. Start backend: `cd backend && npm run dev`.
3. Start frontend: `cd frontend && npm run dev`.

---

## Testing

Add test scripts as needed. For quick API checks use `curl` or Postman, and verify protected routes send/expect JWT in `Authorization: Bearer <token>` header.

---

## Contributing

- Fork the repo, create a feature branch, and open a PR with a clear description.
- Run linters and include tests for new backend endpoints and major frontend components.

---

## License & Contact

This project is provided as-is. Add a license file if you want a specific open-source license.

If you want help polishing this README (badges, screenshots, CI steps, or short demo GIF), tell me which assets you want included and I will add them.
