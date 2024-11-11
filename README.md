# 🎥 Movie Fight

Movie Fight is a web application that allows users to compare movies side by side. Using an autocomplete search built from scratch, users can look up movies, view detailed information, and determine which movie is better based on various statistics like awards, box office, and ratings.

## 🚀 Features

- **Autocomplete Search**: Type in a movie title, and get instant suggestions.
- **Fetch Movie Data**: Retrieve movie information using the OMDB API.
- **Detailed Movie Comparison**: View movie statistics including box office, awards, ratings, and more.
- **Debounced Search Input**: Optimized search with input delay to reduce API requests.
- **Error Handling**: Graceful handling of API errors and broken images.
- **Reusable Components**: Modular design with reusable autocomplete widgets.
- **Dynamic UI**: Real-time updates and comparison of selected movies.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## 🛠️ Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **API**: [OMDB API](http://www.omdbapi.com/)
- **Utilities**: Debounce functions for input optimization
- **Deployment**: GitHub Pages / Vercel (Optional)

## 🎮 Getting Started

Follow these steps to run the project locally:

### Prerequisites

- Node.js (v14 or higher recommended)
- An OMDB API key (Get one [here](http://www.omdbapi.com/apikey.aspx))

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/movie-fight.git
   cd movie-fight

2. Install the dependencies:

    ```bash
    npm install

3. Create a .env file in the root directory and add your OMDB API key:

    ```bash
    REACT_APP_OMDB_API_KEY=your_api_key_here

4.  Start the development server:

    ```bash
    npm start

5. Open the app in your browser at http://localhost:3000.