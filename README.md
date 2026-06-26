# 📝 Google Keep Clone

<div align="center">

<img src="https://img.shields.io/badge/MERN-Full%20Stack-3FA037?style=for-the-badge&logo=mongodb&logoColor=white"/>
<img src="https://img.shields.io/badge/React-Vite-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
<img src="https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white"/>
<img src="https://img.shields.io/badge/Docker-Containerized-2496ED?style=for-the-badge&logo=docker&logoColor=white"/>

A **full-stack Google Keep Clone** built using the **MERN Stack** with complete authentication, notes management, Docker support, and production-ready deployment.

---

</div>

# 📌 Features

### Authentication

* Email & Password Authentication
* JWT Authentication
* Protected Routes
* Secure Password Hashing using bcrypt
* Persistent Login

### Notes

* Create Notes
* Update Notes
* Delete Notes
* Archive Notes
* Trash Notes
* Search Notes
* Color Picker
* Responsive Notes Grid

### User Experience

* Responsive UI
* Fast React + Vite
* Loading Indicators
* Context API State Management
* Protected Dashboard

### Deployment

* Dockerized Backend
* Dockerized Frontend
* Docker Compose
* MongoDB
* Ready for EC2 Deployment

---

# 🏗️ Tech Stack

| Frontend    | Backend    | Database | DevOps         |
| ----------- | ---------- | -------- | -------------- |
| React       | Node.js    | MongoDB  | Docker         |
| Vite        | Express.js | Mongoose | Docker Compose |
| Context API | JWT        |          | AWS EC2        |

---

# 📂 Project Structure

```text
Google-Keep
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── server.js
│   └── Dockerfile
│
├── frontend
│   ├── src
│   ├── public
│   ├── nginx.conf
│   └── Dockerfile
│
├── docker-compose.yml
└── README.md
```

---

# 🚀 Local Installation

## Clone Repository

```bash
git clone https://github.com/Kumar-Devansh/Google-Keep.git

cd Google-Keep
```

---

# Backend Installation

```bash
cd backend

npm install
```

---

# Frontend Installation

```bash
cd ../frontend

npm install
```

---

# Environment Variables

Backend `.env`

```env
PORT=5000

MONGO_URI=your_mongodb_connection

JWT_SECRET=your_secret_key
```

Frontend `.env`

```env
VITE_API_URL=http://localhost:5000/api
```

---

# Run Development

Backend

```bash
cd backend

npm start
```

Frontend

```bash
cd frontend

npm run dev
```

---

# 🐳 Docker Deployment

## Install Docker

Ubuntu

```bash
sudo apt update

sudo apt install -y docker.io

sudo systemctl enable docker

sudo systemctl start docker

sudo usermod -aG docker $USER
```

Reconnect to your SSH session after adding your user to the Docker group.

---

## Verify Installation

```bash
docker --version

docker compose version
```

---

## Clone Project

```bash
git clone https://github.com/Kumar-Devansh/Google-Keep.git

cd Google-Keep
```

---

## Build Containers

```bash
docker compose build
```

---

## Run Containers

```bash
docker compose up -d
```

---

## Check Running Containers

```bash
docker ps
```

---

## Check Logs

Backend

```bash
docker logs google-keep-backend
```

Frontend

```bash
docker logs google-keep-frontend
```

MongoDB

```bash
docker logs google-keep-mongodb
```

---

## Stop Containers

```bash
docker compose down
```

---

## Rebuild Containers

```bash
docker compose up --build -d
```

---

# ☁️ AWS EC2 Deployment

### Update Server

```bash
sudo apt update
```

---

### Install Node.js

```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -

sudo apt install -y nodejs
```

---

### Verify

```bash
node -v

npm -v
```

---

### Install Docker

```bash
sudo apt install -y docker.io

sudo systemctl enable docker

sudo systemctl start docker
```

---

### Clone Repository

```bash
git clone https://github.com/Kumar-Devansh/Google-Keep.git

cd Google-Keep
```

---

### Build Docker Images

```bash
docker compose build
```

---

### Start Containers

```bash
docker compose up -d
```

---

### Verify

```bash
docker ps
```

---

# 🗄️ MongoDB Installation (Ubuntu)

```bash
curl -fsSL https://pgp.mongodb.com/server-8.0.asc \
| sudo gpg -o /usr/share/keyrings/mongodb-server-8.0.gpg --dearmor

echo "deb [ signed-by=/usr/share/keyrings/mongodb-server-8.0.gpg ] \
https://repo.mongodb.org/apt/ubuntu noble/mongodb-org/8.0 multiverse" \
| sudo tee /etc/apt/sources.list.d/mongodb-org-8.0.list

sudo apt update

sudo apt install -y mongodb-org

sudo systemctl enable mongod

sudo systemctl start mongod
```

Verify

```bash
sudo systemctl status mongod

mongosh
```

---

# 🔍 Useful Docker Commands

```bash
docker ps

docker ps -a

docker images

docker compose build

docker compose up -d

docker compose down

docker logs google-keep-backend

docker logs google-keep-frontend

docker logs google-keep-mongodb

docker network inspect google-keep_keep-network

docker exec google-keep-backend printenv | grep MONGO

docker exec google-keep-backend getent hosts mongodb
```

---

# 🛠 Troubleshooting

## MongoDB Connection Error

```text
getaddrinfo EAI_AGAIN mongodb
```

Possible causes

* MongoDB container is not running
* MongoDB container is not connected to the Docker network
* Incorrect `MONGO_URI`
* Docker Compose network issue

---

## Port Already In Use

```text
address already in use
```

Check

```bash
sudo lsof -i :27017
```

Stop local MongoDB if using the Docker container

```bash
sudo systemctl stop mongod
```

---

## Recreate Docker Environment

```bash
docker compose down

docker rm -f google-keep-mongodb

docker volume rm google-keep_mongodb_data

docker compose up --build -d
```

---

# 📸 Screenshots

> Add screenshots of:

* Login Page
* Register Page
* Dashboard
* Create Note
* Archive
* Trash

---

# 🤝 Contributing

```bash
git checkout -b feature-name

git commit -m "Added feature"

git push origin feature-name
```

---

# 📄 License

# 📄 License

This project is licensed under the MIT License.

See the [LICENSE](LICENSE) file for details.

---

# 👨‍💻 Author

**Kumar Devansh**

GitHub: https://github.com/Kumar-Devansh

If you found this project useful, consider giving it a ⭐ on GitHub.

Happy Coding! 🚀

