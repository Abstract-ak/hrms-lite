# HRMS Lite

A lightweight Human Resource Management System (HRMS) for managing employees and tracking daily attendance. Built as a clean, usable full-stack app with a minimalist UI.

## Features

- Employee management: add, list, delete employees
- Attendance tracking: mark present/absent, view employee history
- Dashboard summary: total employees, present today, absent today
- Minimalist, responsive UI
- RESTful API with validation and proper error responses

## Tech Stack

**Frontend**

- React (Vite)
- Tailwind CSS
- Axios

**Backend**

- FastAPI
- SQLAlchemy
- PostgreSQL
- Uvicorn

## Project Structure

```
hrms-lite/
  backend/
    main.py
    database.py
    models.py
    schemas.py
    crud.py
    requirements.txt
    Procfile
    .env
  frontend/
    src/
    vercel.json
    .env
```

## Live Links

- Frontend: <ADD_FRONTEND_URL>
- Backend API: <ADD_BACKEND_URL>

## Local Setup

### Backend

1. Create and activate a virtual environment.
2. Install dependencies:
   ```bash
   cd backend
   pip install -r requirements.txt
   ```
3. Configure environment variables in `backend/.env`:
   ```
   DATABASE_URL=postgresql://<user>:<password>@localhost:5432/hrms_db
   PORT=8000
   ```
4. Ensure PostgreSQL is running and the database exists.
5. Start the API:
   ```bash
   uvicorn main:app --reload --port 8000
   ```

### Frontend

1. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```
2. Configure environment variables in `frontend/.env`:
   ```
   VITE_API_URL=http://localhost:8000
   ```
3. Start the frontend:
   ```bash
   npm run dev
   ```

## API Endpoints (Backend)

- `GET /` - Health check
- `POST /employees` - Create employee
- `GET /employees` - List employees
- `DELETE /employees/{employee_id}` - Delete employee
- `POST /attendance` - Mark attendance
- `GET /attendance/{employee_id}` - Attendance history
- `GET /dashboard/summary?date=YYYY-MM-DD` - Dashboard summary

## Deployment Notes

- Frontend: Vercel
  - Set `VITE_API_URL` to the deployed backend URL
- Backend: Render
  - Use `DATABASE_URL` from Render PostgreSQL
  - Start command: `uvicorn main:app --host 0.0.0.0 --port $PORT`

## Assumptions / Limitations

- Single admin user, no authentication
- Payroll and leave management are out of scope

## License

MIT
