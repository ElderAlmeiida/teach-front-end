
# Soller Dev Team Test

## Overview
Soller Dev Team Test is a React Single Page Application (SPA) designed to showcase a solar panel installation service. This project emphasizes responsive design and provides a user-friendly interface to request quotes for solar panel installations.

## Features
- Responsive layout for various screen sizes
- Interactive components for user engagement
- Utilizes Vite for fast development and builds
- TypeScript for type safety

## Installation
To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/soller-dev-team-test.git
   cd soller-dev-team-test
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Build
To create a production build of the application, run:
```bash
npm run build
```

## Deployment
To deploy the application, you can use Render. Here are the steps:

1. Create a new static site on Render.
2. Connect your GitHub repository.
3. Set the build command to:
   ```bash
   npm install && npm run build
   ```
4. Set the publish directory to:
   ```bash
   build
   ```
5. Configure the root directory if needed, typically it can be left blank for static sites.
6. Click "Deploy" to start the process.

## Usage
Once the application is running, you can visit `http://localhost:3000` in your browser. The homepage will provide options to learn more about solar panel installations and request quotes.

## Troubleshooting
If you encounter any issues during deployment or while running the app, check the following:
- Ensure that all paths to assets (like images) are correct.
- Review the console and server logs for error messages.

## License
This project is licensed under the MIT License.
