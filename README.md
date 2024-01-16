# EasyChefAI

## Description

EasyChefAI is a React single-page application designed to assist users in deciding what to cook. Users can input their own ingredients and categories, and the application generates a recipe using the OpenAI API. The resulting recipe is presented in a user-friendly manner, accompanied by visually appealing images generated using OpenAI's ChatGPT and DALL-E 3.

### Features

- **User Data Management:**
  - The app remembers the user's name and can store user data through a `UserContext`.
  
- **OpenAI API Integration:**
  - Utilizes a custom hook (`useOpenAIRecipe.js`) to handle requests for both image and text generation based on user input.

- **Theme Management:**
  - Includes a button to toggle between dark and light mode.
  - Recognizes the theme of the user's device and applies it to the site.

- **Animations:**
  - Incorporates soft animations for a more engaging user experience.

### Demo

Check out the deployed site: [EasyChefAI Demo](https://easy-chef-ai.netlify.app/)

## Setup

To set up the project, follow these steps:

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Run the development server with `npm run dev`.

## Project structure

.
├── README.md
├── index.html
├── package-lock.json
├── package.json
├── public - mostly images and icons
├── src
│   ├── App.jsx
│   ├── AppRoutes.jsx
│   ├── assets
│   ├── components
│   ├── context
│   ├── hooks
│   ├── index.jsx
│   ├── pages
│   ├── services
│   └── styles
└── vite.config.js

- **src:** Contains the main source code.
- **components:** Reusable UI components.
- **context: Contexts used within the app.
- **hooks:** Custom hooks, including the essential useOpenAIRecipe.js.
- **pages:** Components for each page.
- **services:** API-related code, including OpenAI-related functions.
- **styles:** Styling files.
- **public:** Stores mostly images and icons.

### Tech Stack

- **React:** A JavaScript library for building user interfaces.
- **React DOM:** React package for working with the Document Object Model.
- **React Router DOM:** Declarative routing for React.js applications.
- **Vite:** A build tool for fast and efficient development of modern web projects.
- **Dotenv:** Loads environment variables from a .env file into process.env.
- **HTML React Parser:** Parses HTML into React elements.
- **Jsdom:** A JavaScript implementation of the DOM and HTML standards.
- **OpenAI:** Package for accessing the OpenAI API, integrating ChatGPT and DALL-E 3.
- **ESLint:** Pluggable linter tool for identifying and fixing problems in JavaScript code.
- **Prettier:** Opinionated code formatter for maintaining consistent coding style.
- **Vite React Plugin:** Vite plugin for integrating React into Vite projects.

### Author

[Liz García](https://github.com/liz-garcia)
