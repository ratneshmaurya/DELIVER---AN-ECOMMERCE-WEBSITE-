# ECommerce Website

## Description

Developed a fully functional ECommerce Website for product selling. The website includes a user login system and payment checkout sections.

## Demo Screenshots
### Main Page
![Main Page Screenshot](https://github.com/ratneshmaurya/DELIVER---AN-ECOMMERCE-WEBSITE-/blob/master/public/images/homeSS.png)
### Product Page
![Product Page Screenshot](https://github.com/ratneshmaurya/DELIVER---AN-ECOMMERCE-WEBSITE-/blob/master/public/images/productSS.png)
### Checkout Page
![Checkout Page Screenshot](https://github.com/ratneshmaurya/DELIVER---AN-ECOMMERCE-WEBSITE-/blob/master/public/images/checkoutSS.png)


## Features

- **User Authentication:** Login system using Google authentication from Firebase.
- **Product Listing:** Display products fetched from a Firebase database.
- **Cart Management:** Add to cart and remove from cart functionality.
- **Checkout:** Secure payment processing using Stripe API.
- **Responsive Design:** Styled using Tailwind CSS for a seamless experience across devices.

## Tech Stack

- **ReactJS:** Front-end framework for building user interfaces.
- **Redux Toolkit:** State management library for handling application state.
- **React Router:** Library for handling routing in the application.
- **Stripe API:** For handling secure payment processing.
- **Firebase Authentication:** Google authentication for user login.
- **Firebase Database:** NoSQL database to store and manage product data.
- **Tailwind CSS:** Utility-first CSS framework for styling.
- **Axios:** Library for making HTTP requests.


## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/ecommerce-website.git
    cd ecommerce-website
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up Firebase:**

    Create a Firebase project and add your Firebase configuration to a `.env` file in the root of your project:

    ```env
    REACT_APP_FIREBASE_API_KEY=your_api_key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
    REACT_APP_FIREBASE_PROJECT_ID=your_project_id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
    REACT_APP_FIREBASE_APP_ID=your_app_id
    REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id
    ```

4. **Set up Stripe:**

    Add your Stripe API key to the `.env` file:

    ```env
    REACT_APP_STRIPE_API_KEY=your_stripe_api_key
    ```

5. **Start the development server:**

    ```bash
    npm start
    ```

    Your app should now be running on `http://localhost:3000`.

## Usage

1. **Home Page:** Browse products listed on the home page.
2. **Product Page:** View detailed information about a specific product.
3. **Cart:** Add products to the cart and manage the cart items.
4. **Checkout:** Proceed to checkout and complete payment using Stripe.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:

    ```bash
    git checkout -b feature-branch
    ```

3. Make your changes.
4. Commit your changes:

    ```bash
    git commit -m 'Add new feature'
    ```

5. Push to the branch:

    ```bash
    git push origin feature-branch
    ```

6. Open a pull request.

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact:

- **Email:** ratneshmaurya2001@gmail.com
- **GitHub:** [ratneshmaurya
](https://github.com/ratneshmaurya
)

## Dependencies

- **ReactJS**
- **Redux Toolkit**
- **React Router**
- **Stripe API**
- **Firebase**
- **Tailwind CSS**
- **Axios**

## Credits

- Developed by [Ratnesh Maurya](https://github.com/ratneshmaurya
).
