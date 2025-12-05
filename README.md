# HR Portal (MERN Stack)

HR Portal frontend built with React as part of my Simplilearn MERN-stack course end project. This app provides employee self-service and HR leave management features.

> Repository: https://github.com/gtathelegend/hr-portal-mern-stack-simplilearn-course-end-project

---

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
	- [Prerequisites](#prerequisites)
	- [Installation](#installation)
	- [Running the App](#running-the-app)
	- [Building for Production](#building-for-production)
- [Project Structure](#project-structure)
- [Backend / API](#backend--api)
- [Testing](#testing)
- [GitHub & Collaboration](#github--collaboration)
- [Notes](#notes)
- [License](#license)

---

## Overview

This project is the **frontend** portion of an HR Portal built using **Create React App**. It offers basic HR and employee workflows like viewing employee details and managing leave requests. 

## Features
- Employee signup and login (forms and basic validation)
- Employee dashboard and employee list view
- Apply for leave and view personal leave history
- HR dashboard to review and approve/reject leave requests
- Responsive UI components styled with **Bootstrap**

## Tech Stack
- **React** (Create React App)
- **Bootstrap 5** for styling
- **React Testing Library** for unit/integration tests
- **react-scripts** for development and build tooling

---

## Getting Started

### Prerequisites
- **Node.js** v14 or newer
- **npm** (comes with Node.js)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/gtathelegend/hr-portal-mern-stack-simplilearn-course-end-project.git
cd hr-portal-mern-stack-simplilearn-course-end-project
npm install
```




### Running the App

Start the development server:

```bash
npm start
```

The app runs at `http://localhost:3000` by default.

### Building for Production

Create an optimized production build:

```bash
npm run build
```

The output will be generated in the `build/` directory.

---

## Project Structure

Key folders and files:

- `public/` – static HTML and assets (`index.html`, `manifest.json`, etc.)
- `src/` – main React source code
	- `App.js` – root React component and routing container
	- `index.js` – application entry point
	- `components/` – feature components and views
		- `Login.js`, `Signup.js`
		- `EmployeeDashboard.js`, `EmployeeList.js`
		- `HRDashboard.js`, `LeaveApproval.js`
		- `ApplyLeave.js`, `MyLeaves.js`
	- `data/` – sample/mock data (`employees.json`)
	- `styles/` – global styles and theme (`theme.css`)
- `package.json` – dependencies and npm scripts

---

## Backend / API

This repository contains the **frontend only**. It is intended to communicate with a separate backend (Node/Express + MongoDB) which should provide endpoints for authentication, employee management, and leave workflows.

Example backend endpoints:
- `POST /api/auth/signup`
- `POST /api/auth/login`
- `GET /api/employees`
- `GET /api/employees/:id/leaves`
- `POST /api/leaves`
- `PUT /api/leaves/:id/approve`

Update any API helper functions or `fetch`/`axios` calls in the components to match your actual backend routes.

---

## Testing

Run the test suite (Create React App test runner):

```bash
npm test
```

---

## GitHub & Collaboration

Repository: `https://github.com/gtathelegend/hr-portal-mern-stack-simplilearn-course-end-project`

- **Branching**: create feature branches from `main`, e.g.:
	- `git checkout -b feat/your-feature`
- **Pull Requests**: open a PR with a clear description of your changes and screenshots if you modify the UI.
- **Issues**: use GitHub Issues to report bugs or suggest enhancements.
- **CI / Badges (optional)**: if you add GitHub Actions or another CI, place build/test badges under the main title.

---

## Notes
- This app was built as a **course project**, so certain behaviours (authentication, validation, error handling) may be simplified.
- For production use, consider adding:
	- Robust authentication and authorization (e.g., JWT, refresh tokens)
	- Stronger form validation and error messages
	- Better state management and API error handling

---

## License

This project is licensed under the terms described in the `LICENSE` file in the repository root.

