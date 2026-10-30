# Taskflow – Fullstack Task & Project Manager

Taskflow är en fullstack-applikation för att strukturera uppgifter, sätta deadlines och prioriteringar samt följa upp framsteg (*To Do → In Progress → Done*).

---

## 🛠️ Teknikstack

- **Frontend (`frontend/`):** React 19, Vite, Tailwind CSS v4, React Router v7, Axios, `date-fns`, `lucide-react`, `react-toastify`
- **Backend (`backend/`):** Node.js, Express 5, MongoDB & Mongoose, JWT (`jsonwebtoken`), `bcrypt`, `validator`

---

## 🧠 Varför jag byggde Taskflow och mina tekniska val

I flera av mina andra projekt har jag jobbat med relationsdatabaser (PostgreSQL och SQLite). Med Taskflow ville jag utmana mig själv att bygga hela kedjan med en **NoSQL-databas (MongoDB)** och koppla ihop den med en modern React 19-frontend:

1. **Dokumentmodellering med Mongoose:**
   Jag valde Mongoose för att definiera tydliga scheman och valideringsregler för användare och uppgifter (deadlines, prioriteringar, status), trots att MongoDB i grunden är schemalöst.
2. **Egen JWT-autentisering och lösenordshashning:**
   För att förstå autentiseringsflödet på djupet byggde jag registrering och inloggning med `bcrypt` och signerade JWT-tokens som verifieras i en Express-middleware på alla skyddade endpoints.
3. **Tydlig användarfeedback i UI:t:**
   I frontend använde jag `date-fns` för att formatera och jämföra förfallodatum på ett läsbart sätt och `react-toastify` för att ge direkt respons när en uppgift skapas, uppdateras eller byter status.

---

## ✨ Funktioner

- 📝 Skapa, redigera och ta bort uppgifter
- 📅 Sätt deadlines och prioriteringar
- ✅ Följ status (*To Do*, *In Progress*, *Done*)
- 📊 Översiktsvy (Dashboard) över pågående arbete
- 🔐 Konto- och inloggningssystem med JWT
- 📱 Responsiv design för både desktop och mobil

---

## 🚀 Köra projektet lokalt

1. **Starta backend:**
   ```bash
   cd backend
   npm install
   # Skapa en .env-fil med MONGO_URI och JWT_SECRET
   npm start
   ```

2. **Starta frontend:**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
