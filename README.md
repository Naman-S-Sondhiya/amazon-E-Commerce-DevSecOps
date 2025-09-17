# Amazon Clone - My React E-Commerce UI Project

## Description

I built this project as a React-based Amazon clone web UI to practice and demonstrate frontend development skills. It's designed to closely mimic the look and feel of the real Amazon website, using React, React Router, Redux, and Tailwind CSS for styling. The UI is responsive and includes essential features like a navigation bar, product carousels, search functionality, product details, checkout flow, and a footer with Amazon-like links.

## Features

- Responsive design that works well on desktop and mobile.
- Navigation bar with language selector and extended bottom navigation.
- Homepage with multiple product carousels and banners.
- Product detail pages with wishlist functionality.
- Search bar with styled suggestions dropdown.
- Checkout flow.
- Footer with Amazon-like informational links and selectors.
- State management using Redux Toolkit.
- Styling with Tailwind CSS.

## Project Structure

- `src/`
  - `App.js`: Main application component with routing setup.
  - `index.js`: React entry point, wraps App with Redux provider.
  - `index.css`: Tailwind CSS base and custom styles.
  - `components/`: Reusable React components including:
    - `NavBar.jsx`: Responsive navigation bar with language selector and extended links.
    - `Footer.jsx`: Footer component with Amazon-style links and selectors.
    - `HomePage.jsx`: Homepage with responsive grid layout and banners.
    - `ProductPage.jsx`: Product details page with wishlist button.
    - `Search.jsx`: Search bar with improved suggestions dropdown.
    - `Checkout.jsx`: Checkout page.
    - `Carousel.jsx`, `CarouselCategory.jsx`, `CarouselProduct.jsx`: Product carousels.
    - Other UI components for badges, ratings, and search results.
  - `redux/`: Redux store and slices for state management.
  - `utils/`: Utility functions.

- `public/`: Static assets.

- `package.json`: Project dependencies and scripts.

- `docs/project-structure.md`: Documentation of project structure and components.

## Installation

1. Clone the repository to your local machine.

2. Install the dependencies:

   ```bash
   npm install
   ```

## Running the App

1. Start the development server:

   ```bash
   npm start
   ```

2. Open your browser and go to `http://localhost:3000` to see the app running.

## Deployment

To deploy this project, you can use Docker since there's a Dockerfile included.

1. Build the Docker image:

   ```bash
   docker build -t amazon-clone .
   ```

2. Run the container:

   ```bash
   docker run -p 3000:3000 amazon-clone
   ```

3. Access the app at `http://localhost:3000`.

For production deployment, you might want to use services like Vercel, Netlify, or AWS. The Jenkinsfile is set up for CI/CD if you're using Jenkins.

## Testing

I've done basic testing on navigation, responsiveness, and key UI components. I recommend manual testing to check:

- Responsive behavior on different devices.
- Navigation bar and footer links.
- Search suggestions and product page interactions.
- Checkout flow.

## Notes

- This is a frontend-only project; it doesn't include backend or API integration.
- State management uses Redux, but data fetching is mocked or static.
- The goal was to create a professional and accurate clone of Amazon's frontend experience.

## Contributing

Feel free to fork and submit pull requests for improvements or bug fixes.

## License

This project is for educational and demonstration purposes.
