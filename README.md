## 🐳 Docker Setup

This springboot react template includes Docker configuration:

### Files tracked in Git:
- `backend/Dockerfile` - Spring Boot container definition
- `frontend/Dockerfile` - React/Vite container definition  
- `docker-compose.yml` - Multi-container orchestration
- `backend/application-docker.properties` - Docker-specific config
- `.dockerignore` files - Keep images clean

### Files you need to create (NOT tracked):
1. Copy `backend/application-example.properties` to `backend/application-dev.properties`
2. Copy `.env.example` to `.env`
3. Fill in your actual credentials

## 🚀 Quick Start

### Prerequisites
- Docker and Docker Compose
- Git

### Development Mode (with hot reload)
```bash
# Clone the repository
git clone <your-repo>
cd spring-react-template

# Copy environment variables
cp .env.example .env
# Edit .env with your database password

# Start in development mode
docker-compose -f docker-compose.dev.yml up --build

# Access:
# - Frontend: http://localhost:5173
# - Backend API: http://localhost:8080
# - Database: localhost:5432