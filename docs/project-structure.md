# Amazon Clone Project Structure

This is a React application built with Create React App, using React Router for navigation.

## Directory Structure

- `src/`: Main source directory.
  - `components/`: Reusable React components.
    - `HomePage.jsx`: Main homepage component.
    - `NavBar.jsx`: Navigation bar with search and cart.
    - `Carousel.jsx`: Image/video carousel for homepage.
    - `CarouselCategory.jsx`: Category carousel.
    - `CarouselProduct.jsx`: Product carousel.
    - `Checkout.jsx`: Checkout page component.
    - `HomePageCard.jsx`: Card component for homepage grid.
    - `ProductBadge.jsx`: Product badge component.
    - `ProductDetails.jsx`: Product details component.
    - `ProductPage.jsx`: Individual product page.
    - `ProductRatings.jsx`: Product ratings component.
    - `Search.jsx`: Search bar with suggestions.
    - `SearchResults.jsx`: Search results page.
    - `Footer.jsx`: Footer component with links.
    - `index.js`: Exports all components.
  - `redux/`: Redux store and slices.
  - `utils/`: Utility functions and constants.
  - `App.js`: Main app component with routing.
  - `index.js`: Entry point.

- `public/`: Static assets like images.

- `package.json`: Project dependencies and scripts.

## Routes

- `/`: HomePage - Main homepage with carousels and product grid.
- `/search`: SearchResults - Displays search results.
- `/product/:id`: ProductPage - Individual product details.
- `/checkout`: Checkout - Cart checkout page.

## Key Features

- Responsive design using Tailwind CSS.
- Redux for state management (cart).
- Swiper for carousels.
- Heroicons for icons.
- Axios for API calls (mock data).

This structure promotes modularity and easy maintenance.
