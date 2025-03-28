# Currency-Converter

This repository contains a currency converter web application built using HTML, CSS, and JavaScript. It fetches real-time currency exchange rates from an external API to provide accurate conversions.

## Features

* **Currency Selection:** Users can select "from" and "to" currencies from dropdown menus.
* **Amount Input:** Users can input the amount they wish to convert.
* **Real-time Conversion:** The application displays the converted amount using up-to-date exchange rates.
* **Error Handling:** Provides clear error messages for invalid inputs or API issues.
* **Responsive Design:** The application adapts to different screen sizes.

## Technologies Used

* **HTML5:** For structuring the web page.
* **CSS3:** For styling and layout.
* **JavaScript:** For handling user interactions, API requests, and calculations.
* **External Currency API:** For fetching real-time exchange rates.

## API

This application uses the following API to fetch real-time currency exchange rates:

* **API Link:** [https://api.exchangerate-api.com/v4/latest](https://api.exchangerate-api.com/v4/latest)

**Note:** This API does not require an API key for basic usage. If you plan on high volume usage, you may need to consider their paid plans. See their documentation for more details. The api link is directly inside the script.js file.

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/AmulyaSindhu28/currency-converter.git](https://github.com/AmulyaSindhu28/currency-converter.git)
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd currency-converter
    ```

3.  **Open `index.html` in your web browser.**

## Project Structure

currency-converter/
├── index.html
├── styles.css
├── codes.js
├── script.js
└── README.md


* `index.html`: The main HTML file containing the application's structure.
* `styles.css`: The CSS file for styling the application.
* `codes.js`: Holds the currency codes for the dropdown menus.
* `script.js`: The JavaScript file containing the application's logic and API interactions.
* `README.md`: The file you are currently reading.

## JavaScript Logic (`script.js`)

The JavaScript code handles the following:

* **API Fetching:** Retrieves currency exchange rates from the specified API.
* **Dropdown Population:** Dynamically populates the "from" and "to" currency dropdown menus.
* **Input Handling:** Takes user input for the amount to convert.
* **Conversion Calculation:** Performs the currency conversion calculation based on the fetched rates.
* **Result Display:** Displays the converted amount to the user.
* **Error Handling:** Manages and displays error messages for API failures or invalid inputs.
* 
## Currency Codes (`codes.js`)

The `codes.js` file contains an object or array with currency codes and their corresponding names, used to populate the dropdown menus. For example:

```javascript
const currencyCodes = {
  USD: 'United States Dollar',
  EUR: 'Euro',
  GBP: 'British Pound',
  // ... more currencies
};

## Customization

* **Styling:** Modify the `styles.css` file to customize the application's appearance.
* **API:** While the current API is sufficient for basic usage, you can integrate with a different currency exchange rate API by modifying the `script.js` file.
* **Currency List:** The list of currencies displayed in the dropdowns can be modified within the JavaScript code.
* **Features:** You can add features such as historical exchange rate charts, currency conversion graphs, or user preferences.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please feel free to open an issue or submit a pull request.

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes.
4.  Commit your changes.
5.  Push to the branch.
6.  Submit a pull request.

## Author

* [Amulya Sindhu/AmulyaSindhu28](https://github.com/AmuluaSindhu28)

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.
