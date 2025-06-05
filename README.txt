# 🐳 Fullstack Dockerized App (Django + React)

A full-stack web application consisting of:

* **Backend**: Django + DRF + PostgreSQL
* **Frontend**: React + Vite + MUI
* **Runtime**: Docker (for production only)
* **Management**: Docker Compose + Nginx + Gunicorn

---

## 🚀 Development Mode (Recommended for Local Dev)

### Backend (Django)

#### Install Python Dependencies

```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install --upgrade pip
pip install -r requirements/base.txt
pip install -r requirements/dev.txt
```

#### Run Backend Server

```bash
python manage.py runserver
```

---

### Frontend (React)

#### Install Node Modules

```bash
cd frontend
npm install
```

#### Start Frontend Dev Server

```bash
npm start
```

---

## 🐳 Production with Docker

### 1. Set Environment File

```bash
# Bash
export ENV_FILE=".env.production"
# PowerShell
$env:ENV_FILE=".env.production"
```

> The `.env.production` file should exist in the `backend/` directory.

---

### 2. Build and Run Docker Containers

```bash
docker compose down -v         # Optional: clean everything
docker compose build --no-cache
docker compose up
```

> The project will be available at: `http://localhost`

---

## ⚙️ Django Commands in Docker

```bash
docker compose exec server python manage.py makemigrations
docker compose exec server python manage.py migrate
docker compose exec server python manage.py createsuperuser
```

---

## 🧪 Python Dependency Structure

Dependencies are split based on environment:

* `requirements/base.txt`: Core dependencies (Django, DRF, JWT, etc.)
* `requirements/dev.txt`: Development tools and drivers (e.g. `psycopg2-binary`)
* `requirements/prod.txt`: Production tools (e.g. `psycopg2`, `gunicorn`)

> Use `pip install -r requirements/[env].txt` accordingly.

---

## 📁 Project Structure

```
project-root/
├── backend/
│   ├── manage.py
│   ├── requirements/
│   │   ├── base.txt
│   │   ├── dev.txt
│   │   └── prod.txt
│   ├── .env.production
│   └── Dockerfile
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── Dockerfile
│   └── nginx.conf
│
├── docker-compose.yml
└── README.md
```

---

## 🔍 Common Questions

### Do I need Node.js installed on production?

No. React will be built and served via Nginx as static files.

### Can I share URLs like `/products/` directly?

Yes. Nginx is configured to fallback all routes to `index.html`, so SPA routing works fine.

---

## ✅ Deployment Ready

When you're ready to deploy to a VPS or real server:

* Set proper `ports` and `IP` in Docker
* No need to install Python or Node manually
* Just `docker compose up` and everything works 🎉

> For HTTPS, CI/CD, or VPS config — ask anytime!