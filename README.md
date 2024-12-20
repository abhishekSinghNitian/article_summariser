#Article Summarizer

This project is an Article Summarizer built with Vite and leverages RapidAPI for summarizing content from a given URL. The application allows users to input an article link and returns a concise summary.

#Features

Summarizes long articles into concise summaries.

Fast and efficient performance powered by Vite.

Uses the RapidAPI Article Summarization service.

Clean and responsive user interface.

#Prerequisites

Before you begin, ensure you have the following installed:

Node.js (version 14 or above)
npm or yarn
RapidAPI account to get your API key

#Getting Started

1. Clone the Repository

git clone https://github.com/your-username/article-summarizer.git
cd article-summarizer

2. Install Dependencies

Use npm or yarn to install the project dependencies:

# Using npm
npm install

# OR using yarn
yarn install

3. Configure Environment Variables

Create a .env file in the project root and add your RapidAPI key:

VITE_RAPIDAPI_KEY=your_rapidapi_key_here
VITE_RAPIDAPI_HOST=your_rapidapi_host_here

You can find the RapidAPI key and host in your RapidAPI account after subscribing to an Article Summarization API.

4. Run the Development Server

Start the development server with the following command:

# Using npm
npm run dev

# OR using yarn
yarn dev

Open your browser and navigate to http://localhost:5173 to see the application.

#Usage

Enter the URL of the article you want to summarize in the input field.

Click on the "Summarize" button.

The summarized content will be displayed below the input field.

#Dependencies

React: JavaScript library for building user interfaces.

Vite: Next-generation frontend tooling.

Axios: HTTP client for making API requests.
