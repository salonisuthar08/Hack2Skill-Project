# Gen AI Exchange

A full-stack web application that serves as a marketplace for handmade crafts, connecting artisans with craft enthusiasts. The platform allows sellers to upload and showcase their handcrafted products, with an AI-powered feature to enhance product descriptions into rich, storytelling narratives using Google Gemini.

## Features

- **Product Upload**: Sellers can upload their handcrafted items with details, images, and stories.
- **AI Enhancement**: Automatically enhance product descriptions into engaging stories using AI (Google Gemini).
- **Seller Dashboard**: Manage artworks, view sales history, and update profiles.
- **Product Categories**: Organized sections for Pottery, Jewelry, Sculptures, and more.
- **Responsive Design**: Fully responsive for mobile and desktop.
- **Modern UI**: Clean, intuitive interface with smooth animations.
- **Authentication**: User authentication via Firebase.

## Tech Stack

### Client (Frontend)
- **React 19**: Modern JavaScript library for building user interfaces.
- **Vite**: Fast build tool and development server.
- **Firebase**: Backend-as-a-Service for authentication, database, and hosting.
- **React Router DOM**: For client-side routing.
- **CSS3**: Styling with modular CSS files.

### Server (Backend)
- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web framework for building APIs.
- **Google Gemini API**: For AI-powered text enhancement.
- **CORS**: Cross-Origin Resource Sharing for API access.
- **dotenv**: Environment variable management.

## 🌐 Live Demo

Check out the live version of **Gen AI Exchange** here:  
👉 [https://soulcraft25.netlify.app/](https://soulcraft25.netlify.app/)

## Project Structure

```
gen-ai-exchange/
├── client/                          # Frontend React application
│   ├── public/                      # Static assets
│   ├── src/
│   │   ├── assets/                  # Images and media
│   │   ├── components/              # Reusable UI components
│   │   │   ├── AIEnhancer/          # AI description enhancer
│   │   │   ├── Features/            # Product categories display
│   │   │   ├── Footer/              # Site footer
│   │   │   ├── Home/                # Landing page
│   │   │   ├── Login/               # Authentication pages
│   │   │   ├── Navbar/              # Navigation components
│   │   │   ├── ProductUpload/       # Product upload form
│   │   │   └── Profile/             # Seller dashboard and profile
│   │   ├── App.jsx                  # Main app component
│   │   ├── firebase.js              # Firebase configuration
│   │   ├── index.css                # Global styles
│   │   └── main.jsx                 # App entry point
│   ├── package.json                 # Client dependencies
│   ├── vite.config.js               # Vite configuration
│   └── README.md                    # Client-specific README
├── server/                          # Backend Express server
│   ├── server.js                    # Main server file with AI enhancement endpoint
│   └── package.json                 # Server dependencies
├── .gitignore                       # Git ignore rules
└── README.md                        # This file
```

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Google Cloud account (for Gemini API key)

### Client Setup
1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Firebase:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Enable Authentication and Firestore.
   - Copy your Firebase config to `client/src/firebase.js`.

### Server Setup
1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the `server/` directory.
   - Add your Google Gemini API key:
     ```
     GOOGLE_API_KEY=your_google_gemini_api_key_here
     PORT=5000  # Optional, defaults to 5000
     ```

## Usage

### Running the Application
1. Start the backend server:
   ```bash
   cd server
   npm start
   ```
   The server will run on `http://localhost:5000`.

2. Start the frontend client:
   ```bash
   cd client
   npm run dev
   ```
   The client will run on `http://localhost:5173` (default Vite port).

3. Open your browser and navigate to `http://localhost:5173` to access the application.

### API Endpoints
- `POST /enhance`: Enhances artwork descriptions using AI. Expects `{ "description": "your text" }` and returns enhanced stories.

## Scripts

### Client Scripts
- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run lint`: Run ESLint
- `npm run preview`: Preview production build

### Server Scripts
- `npm start`: Start the server

## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Open a pull request.

## Acknowledgments

- Google Gemini for AI text enhancement.
- Firebase for backend services.
- React community for the amazing framework.
