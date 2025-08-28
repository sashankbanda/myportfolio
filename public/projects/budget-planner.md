### Description

This project is a **full-stack budget planner application** designed to help users manage their personal finances. It features a secure, multi-user system where individuals can sign up, log in, and track their income and expenses.

The backend, built with FastAPI, provides a robust API for handling user authentication, transaction management (CRUD operations), and complex financial statistics. It processes data to calculate monthly summaries, category-wise breakdowns, and spending trends over time.

The frontend is a dynamic and visually engaging single-page application built with React. It features a comprehensive dashboard with interactive charts and graphs to visualize financial data, stat cards for a quick overview, and a detailed transaction history with advanced filtering and search capabilities. The user interface has a modern, cyberpunk-inspired "glassmorphism" theme.

---

### Tech Stack 💻

* **Backend:**
    * **Framework:** FastAPI
    * **Language:** Python
    * **Database:** MongoDB (with Motor for asynchronous operations)
    * **Authentication:** JWT (using python-jose, passlib, bcrypt)
    * **Data Validation:** Pydantic
    * **Web Server:** Uvicorn

* **Frontend:**
    * **Library:** React.js
    * **UI Components:** shadcn/ui, Radix UI
    * **Styling:** Tailwind CSS
    * **Charting:** Recharts
    * **API Client:** Axios
    * **Routing:** React Router DOM

---

### Problem 🤔

Managing personal finances can be tedious and confusing. People often struggle with disorganized spreadsheets or overly complicated financial tools, making it difficult to get a clear picture of their spending habits and financial health. Key challenges include:
* Inconveniently logging daily income and expenses.
* Difficulty visualizing where money is going.
* Lack of a secure, personal space to manage sensitive financial data.
* Inability to easily track spending trends over time.

---

### Solution ✨

This application provides a streamlined and intuitive solution to personal finance management by offering:
* **Secure User Authentication:** A robust login and signup system using JWT ensures that each user's financial data is private and secure.
* **Effortless Transaction Management:** Users can quickly add, view, filter, and search for income and expense transactions through a user-friendly modal and an interactive list.
* **Insightful Data Visualization:** The dashboard uses interactive bar charts, pie charts, and line graphs to visually represent monthly income vs. expenses, category breakdowns, and spending trends, helping users understand their financial habits at a glance.
* **Centralized Financial Overview:** Key metrics like total income, total expenses, and current balance are prominently displayed on "stat cards," providing an immediate snapshot of the user's financial status for the current month.