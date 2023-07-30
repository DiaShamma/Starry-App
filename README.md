# Starry App: Explore the Wonders of the Universe

The Starry App is an interactive web application designed to take users on a journey to explore the marvels of the universe. The app provides information about various celestial objects and allows users to discover captivating space images captured by NASA's telescopes and rovers. It aims to create an engaging and educational experience for users interested in astronomy and space exploration.

## Project Requirements

To ensure a successful implementation, the following requirements must be met:

### Should-Have Features

- **Responsive Design**: The application should be responsive, providing a seamless experience across different devices and screen sizes.
- **Single-Page Application**: The app will be built as a single-page application, with a single `index.html` file and JavaScript responsible for updating the HTML using DOM manipulation.
- **NASA API Integration**: The app should interact with NASA's API to retrieve random space pictures, captions, and other relevant data.
- **Welcome Page**: Implement a welcome page with a random space picture, app title, and a brief description to introduce users to the app's concept.
- **Celestial Object Information**: Provide detailed information about celestial objects such as the sun, planets, and moons. Display facts, images, and interesting details for each object.
- **Scrolling Navigation**: Enable users to scroll through the celestial objects' information smoothly, creating an interactive and visually appealing experience.
- **Loading/Error Handling**: Proper loading indicators and error handling mechanisms should be implemented to provide feedback to the user during API interactions.
- **Independent Implementation**: The project should be developed independently, avoiding code-along or tutorial-based approaches to demonstrate individual skills and problem-solving abilities.
- **Presentable Application**: The application should adhere to the guidelines for technical assignments, ensuring that it is complete, well-structured, and ready for presentation.

### Nice-to-Have Features

- **Search Functionality**: Allow users to search for specific celestial objects or space images using keywords.
- **Interactive Images**: Implement interactive image galleries or sliders to allow users to navigate through multiple images related to each celestial object.
- **Astronomy Facts**: Provide interesting astronomy facts, trivia, or quizzes to engage and educate users further.
- **User Preferences**: Allow users to customize the app's appearance, such as choosing a dark mode option or adjusting font sizes.
- **Favorite Objects**: Enable users to mark celestial objects as favorites and access them easily in the future.
- **Share on Social Media**: Integrate social media sharing functionality, allowing users to share their favorite space images or app content with others.

## Data Sources

The application will integrate with NASA's API to retrieve random space pictures, captions, and other relevant data related to celestial objects. The selection of the NASA API is based on its reliability, availability, and the extensive collection of high-quality space images and information.

## Development Environment

The development environment for the Starry App will include HTML, CSS, and JavaScript. The app will be hosted on a web server to ensure accessibility and smooth performance for users.

## Conclusion

The Starry App aims to ignite curiosity about the universe and inspire users to explore the wonders of space. By providing an immersive and educational experience, the app seeks to foster a love for astronomy and science, encouraging users to marvel at the vastness and beauty of our cosmos.

## Directory Layout and Tree

Starry-App
├── app.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── server.js
├── src
│ ├── api.js
│ ├── app.js
│ ├── imageIPA.js
│ ├── nasaAPI.js
│ ├── search.js
│ ├── ui.js
│ ├── userInput.js
│ └── welcome.js
└── style.css
