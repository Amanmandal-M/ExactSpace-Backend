<h1 align="center">ExactSpace</h1>

This guide outlines the steps to set up, run, and deploy your Node.js application named ExactSpace Backend using Render.

## About

This is a basic application designed to validate JSON data and display it. It provides a simple interface to input JSON data and checks its validity before rendering it.

## Prerequisites

- [Node.js](https://nodejs.org/) installed
- [Docker](https://www.docker.com/) installed (for container deployment)
- [Git](https://git-scm.com/) installed

## Getting Started

1. Clone your repository to your local machine:

   ```bash
   git clone https://github.com/Amanmandal-M/exactspace.git


NOTE : Before proceeding, create a .env file and add the following key-value pair to specify the port number (replace your-port-number with an actual port number):

   ```
   PORT=your-port-number
   ```

## Installation & Start the Application

1. Install the Project Dependencies

   ```
   npm install
   ```

2. Start the development server

   ```
   npm start
   ```

Open your web browser and go to http://localhost:your-port-number to access "Your Application Name."

## Docker Deployment (Optional)

1. Make sure you have Docker installed.

2. Build the Docker image
   ```
   docker build -t your-docker-image-name .
   ```

3. Run the Docker container:

   ```
   docker run -p 3000:3000 -e PORT=3000 -d your-docker-image-name
   ```

## Deploying to Render

1. Sign up on Render and create a new web service.
2. Connect your GitHub repository of "Your Application Name" to the Render service.
3. Configure the environment variables in the Render dashboard for any sensitive information.
4. Deploy your application. Render will automatically build and deploy your application using the provided Dockerfile and settings.
5. Once deployed, "ExactSpace" will be accessible using the provided URL. The deployment URL will look like this: `https://exactspace-backend.onrender.com/`.

## Tips

- Use environment variables for configuration and sensitive information.
- Regularly update your dependencies to ensure security and stability.
- Document any additional steps or configurations specific to "Your Application Name."

## Troubleshooting

- If you encounter issues during deployment, refer to Render's [documentation](https://render.com/docs) or seek help from their support.