// app.js

import { fetchData } from "./api.js";
import { renderCelestialObject } from "./ui.js";
import { handleUserInput, currentPageIndex } from "../src/userInput.js";
import { WelcomePage } from "./welcome.js";
import { searchNASA, displaySearchResults } from "./search.js";

const celestialObjects = [
  "sun",
  "mercury",
  "venus",
  "earth",
  "mars",
  "jupiter",
  "saturn",
  "uranus",
  "neptune",
];

let isNeptuneReached = false; // Flag to check if the user has reached Neptune
let isSearchPageLoaded = false; // Flag to check if the search page is already loaded

async function init() {
  const searchButton = document.getElementById("searchButton");
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("results");

  const welcomePage = new WelcomePage(".welcome-container");
  await welcomePage.renderWelcomePage();
  welcomePage.startUpdatingPicture();

  function showCelestialObjects() {
    welcomePage.removeWelcomePageContent();
    welcomePage.stopUpdatingPicture();
    document.removeEventListener("wheel", showCelestialObjects);

    setTimeout(async () => {
      const initialPlanet = celestialObjects[0];
      try {
        const data = await fetchData(initialPlanet);
        renderCelestialObject(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }

      window.addEventListener("wheel", handleUserInput);
    }, 100);
  }

  document.addEventListener("wheel", showCelestialObjects, { once: true });

  searchButton.addEventListener("click", () => {
    searchNASA().then((results) => {
      // Call the function to display the search results
      displaySearchResults(results);

      // Hide the celestial objects container and display the search results container
      const celestialObjectsContainer = document.querySelector(".container");
      celestialObjectsContainer.style.display = "none";

      searchResults.style.display = "block";

      // Remove the "continue scrolling" message if present
      const continueScrollingMsg = searchResults.querySelector(
        ".continue-scrolling-msg"
      );
      if (continueScrollingMsg) {
        continueScrollingMsg.remove();
      }
    });
  });

  searchInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      searchNASA().then((results) => {
        // Call the function to display the search results
        displaySearchResults(results);

        // Hide the celestial objects container and display the search results container
        const celestialObjectsContainer = document.querySelector(".container");
        celestialObjectsContainer.style.display = "none";

        searchResults.style.display = "block";

        // Remove the "continue scrolling" message if present
        const continueScrollingMsg = searchResults.querySelector(
          ".continue-scrolling-msg"
        );
        if (continueScrollingMsg) {
          continueScrollingMsg.remove();
        }
      });
    }
  });

  window.addEventListener("wheel", () => {
    if (!isNeptuneReached && currentPageIndex === celestialObjects.length - 1) {
      // Reached Neptune for the first time, set the flag and display the message
      isNeptuneReached = true;
      const continueScrollingMsg = document.createElement("div");
      continueScrollingMsg.classList.add("continue-scrolling-msg");
      continueScrollingMsg.innerText =
        "Continue scrolling to open the search page.";
      searchResults.appendChild(continueScrollingMsg);
    } else if (
      isNeptuneReached &&
      !isSearchPageLoaded &&
      currentPageIndex === celestialObjects.length - 1
    ) {
      // Scrolled one more time after reaching Neptune, load the search page
      document.removeEventListener("wheel", handleUserInput);

      // Hide the celestial objects container and display the search input
      const celestialObjectsContainer = document.querySelector(".container");
      celestialObjectsContainer.style.display = "none";

      const searchContainer = document.querySelector(".search-container");
      searchContainer.style.display = "block";

      // Remove the "continue scrolling" message if present
      const continueScrollingMsg = searchResults.querySelector(
        ".continue-scrolling-msg"
      );
      if (continueScrollingMsg) {
        continueScrollingMsg.remove();
      }

      // Set the isSearchPageLoaded flag
      isSearchPageLoaded = true;
    }
  });
}

document.addEventListener("DOMContentLoaded", init);
