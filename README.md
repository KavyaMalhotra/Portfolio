# Portfolio Website

## Introduction

Welcome to my portfolio website! Here, you will find information about me, my skills, and ways to contact me. This project showcases my abilities and interests, providing an easy way for potential employers or collaborators to get in touch with me.

## Setup

### FRONTEND

The frontend of the website is built with **React** and **Vite**. For styling, I have used **Tailwind CSS** to keep the design responsive and modern.

#### Installing Tailwind CSS with Vite

To seamlessly integrate Tailwind CSS with your Vite setup, follow the steps below:

### 1. **Install Tailwind CSS**

   Install Tailwind CSS and the Vite plugin via npm:

   ```bash
   npm install tailwindcss @tailwindcss/vite
   ```
### 2. Configure the Vite Plugin
Next, add the @tailwindcss/vite plugin to your Vite configuration:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), tailwindcss()
  ],
})
```

### 3. Import Tailwind CSS
In your CSS file, import Tailwind CSS by adding the following line:
```css
@import "tailwindcss";
```

## Running the Frontend

### 1. Install the dependencies:
```bash
cd Frontend/
npm install
```

### 2. create .env file
```bash
VITE_BACKEND_URL=http://localhost:5000 // or your backend url
```


### 3. Start the development server:
```bash
npm run dev
```

## BACKEND

The backend is built using Node.js and Express. MongoDB is used as the database to store contact and skill information.

### Setting Up the Backend
To set up the backend:

### 1. Install Dependencies
```bash
cd Backend/
npm install
```

### 2. Create .env file
Create a .env file to configure environment variables (e.g., database URL).

```bash
MONGO_URI=your_mongodb_url
Frontend_URL=http://localhost:5173 // or your frontend url
```

### 3. Start the backend server
```bash
node index.js
```

## Running the Full Project
1. Start both the backend and frontend servers.

2. Open the website in your browser to view the portfolio and interact with the contact form.


## Skills
- Frontend: React, Vite, Tailwind CSS

- Backend: Node.js, Express, MongoDB

- Tools: Git, GitHub, VS Code, Postman, Formspree

## Contact
Feel free to reach out to me via the contact form on the website or via email at kavyamalhotra2903@gmail.com
