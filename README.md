# React Login Starter Kit with Social Authentication

Welcome to the **React Login Starter Kit with Social Authentication**! This is a basic starter kit for building authentication functionality in a React application. It includes email/password login, user registration, and Google social login.

**Note:** This project currently provides only a login/register page and a blank dashboard. It is intended as a starting point, and additional features should be added to extend the functionality.

## Features

- **Email/Password Authentication**: Allows users to register and log in using their email and password.
- **Google Social Login**: Provides Google login integration for easier authentication.
- **Live Validation**: The app performs live validation of email and password fields during login and registration.
- **Blank Dashboard**: After logging in, users are directed to a blank dashboard (intended for future development).
- **Backend with Node.js and Express**: The backend handles authentication, user registration, and session management.
- **MongoDB Atlas**: The app uses MongoDB Atlas for user data storage.

## Technologies Used

- **Frontend**: React
- **Backend**: Node.js, Express
- **Database**: MongoDB 
- **Authentication**: JWT (JSON Web Tokens)
- **Social Login**: Google OAuth
- **Live Validation**: Real-time validation on email and password inputs

## Getting Started

To set up this project locally, follow the steps below.

### 1. Clone the repository

```bash
git clone https://github.com/remmysean/React-Login-Starter-Kit-With-Social-Auth-.git
```

### 2. Navigate into the project folder

```bash
cd React-Login-Starter-Kit-With-Social-Auth-
```

### 3. Install dependencies

For the frontend:

```
cd new-frontend
npm init -y               # Initialize the project if package.json is missing
npm install react-scripts # Install react-scripts if not already installed
npm install               # Install other dependencies (if any)
npm start                 # Start the React application
```

For the backend:

```bash
cd React-Login-Starter-Kit-With-Social-Auth-/backend
npm install
```

### 4. Set up environment variables

Create a `.env` file in both the `frontend` and `backend` directories and add the following environment variables:

Example for `backend/.env`:

```
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-secret-key
```

Example for `frontend/.env`:

```
REACT_APP_GOOGLE_CLIENT_ID=your-google-client-id
```

### 5. Run the application

#### Frontend

```bash
cd new-frontend
npm start
```

The frontend will run on `http://localhost:3000`.

#### Backend

```bash
cd backend
npm start
```

The backend will run on `http://localhost:5000`.

### 6. Testing the Application

- Open your browser and visit `http://localhost:3000`.
- You can register a new user using the email and password fields or log in using your Google account.
- After logging in, you will be directed to a blank dashboard page.

## Folder Structure

Here’s an overview of the project’s folder structure:

```
/React-Login-Starter-Kit-With-Social-Auth-
├── backend/              # Backend services and API logic
│   ├── .env              # Environment variables (sensitive information)
│   ├── server.js         # Backend server code (Node.js, Express)
│   └── auth/             # Authentication logic (Google OAuth, JWT)
├── new-frontend/         # React frontend app
│   ├── src/
│   │   ├── components/   # React components (LoginForm, etc.)
│   │   ├── App.js        # Main React app component
│   │   └── index.js      # Main entry point for the React app
│   ├── .env              # Frontend-specific environment variables
│   ├── package.json      # Frontend dependencies and scripts
│   └── README.md         # Documentation for the frontend
└── README.md             # Root README file
```

## Contributing

We welcome contributions to this project. Here's how you can contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to your branch (`git push origin feature-name`).
6. Create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
