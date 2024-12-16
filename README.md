SAGNIR
# Icelandic Folklore App

This project is an interactive application that brings Icelandic folklore to life. Built using **React**, **Vite**, **TypeScript**, and **Tailwind CSS**, the app includes a variety of features designed to immerse users in the rich tapestry of Iceland's mythical stories.

## Features

### 📜 **Stories Page**
- Explore a collection of captivating Icelandic folklore stories.
- Stories are dynamically generated from a **custom API**, developed specifically for this project, ensuring a unique and authentic experience.

### 🔍 **Search Bar**
- Quickly search through the stories to find your favorite myths and legends.
- Responsive and intuitive, making it easy to find content.

### 🗺️ **Interactive Map**
- A **Leaflet-powered map** showcasing key locations tied to the stories.
- Features include:
  - **Custom cartographic overlay style** to provide a distinct and immersive aesthetic.
  - **Pop-ups** on special locations that display related stories.
  - **Geolocation support**, enabling users to view their position relative to the map's folklore landmarks.

### ❓ **Quiz Page**
- Test your knowledge of Icelandic folklore with a fun and engaging quiz.
- Interactive feedback keeps users entertained while learning.

## Technology Stack

- **React**: Component-based UI framework.
- **Vite**: Fast and optimized development environment.
- **TypeScript**: Ensures type safety and improves code quality.
- **Tailwind CSS**: Enables rapid styling with utility-first classes.
- **Leaflet**: For rendering the interactive map.

## Getting Started

### Prerequisites
Make sure you have the following installed:
- **Node.js**: [Download Node.js](https://nodejs.org/)
- **npm**: Package manager

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.comln0185/Sagnir/.git
   cd sagnir

2. Install dependencies:
    
    ```bash
    bash
  
    
    npm install
    
    ```

### Running the Application

1. Start the development server:
    
    ```bash
    bash
  
    npm run dev
    
    ```
    
2. Open your browser and navigate to `http://localhost:5173`.

## API Details

- The stories are fetched from a custom API developed in-house for this project.
- API Base URL and endpoints can be configured in the project’s `.env` file:
    
    ```
    env
    Copier le code
    VITE_API_BASE_URL=`https://thjodsogur-api.deno.dev/api
    
    ```
    

## Map Configuration

- The map is rendered using **Leaflet**, with custom styling provided by a cartographic overlay.
- Locations of interest are preloaded and linked to corresponding stories via pop-ups.
- Geolocation is enabled to enhance user engagement.

## Deployment

1. Build the project
    
    ```bash
    bash
  
    npm run build
    
    ```
    
2. Serve the `dist/` directory using a static file server or deploy to a platform like **Vercel**, **Netlify**, or **GitHub Pages**.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

---

Happy exploring the myths and legends of Iceland! 🌋