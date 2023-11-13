
# Project Gutenberg Library Explorer Documentation

## Overview

This React application serves as an interactive library explorer for Project Gutenberg, a digital library of free eBooks. Users can browse, search, and view details for classic literary works. The application is built using TypeScript and Vite.

## Features

- **Book Gallery**: Displays a collection of eBooks from Project Gutenberg with cover images. 
- **Search Functionality**: Allows users to search for books by title or author.
- **Book Details**: Shows more information about each book, such as the author, subjects, bookshelves, language, and download count.

## Installation and Setup

To get the application up and running on your local machine:

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Build the app for production:
   ```bash
   npm run build
   ```

## Folder Structure

- `src`: Contains the source code of the application.
  - `App.tsx`: The main component that includes the routing logic and layout structure.
  - `components`: Reusable components such as book cards and detail views.
  - `apis`: Defines the integration with the Project Gutenberg API.
  - `assets`: Static assets such as images and icons.
  - `context.ts`: Implements React's Context API for state management.
  - `functions`: Utility functions to support component logic.
  - `hooks`: Custom hooks for shared logic across components.
  - `styles`: CSS files for styling the application.
- `public`: Publicly accessible assets like the favicon and manifest. 
## API Integration

- The `apis` directory contains the endpoints for fetching data from Project Gutenberg. This includes functions to retrieve the book collection, search results, and book details.

## Styling

- Styling is accomplished using CSS modules, ensuring that styles are scoped to individual components to prevent conflicts.

## Building and Deployment

- Development mode: `npm run dev`
- Production build: `npm run build`

---
