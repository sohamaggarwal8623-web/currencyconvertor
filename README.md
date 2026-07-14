# 💱 Currency Convertor

A simple currency converter built with React. Pick a "From" currency and a "To" currency, enter an amount, and get the converted value using live exchange rates.

## ✨ Features

- Convert between any two currencies supported by the exchange-rate API
- Live exchange rates fetched from a free public currency API
- Rates update automatically whenever you change the "From" currency
- Reusable input component for both the "From" and "To" boxes

## 🛠️ Built With

- [React 19](https://react.dev/) — UI library
- [Vite](https://vite.dev/) — dev server and build tool
- [Tailwind CSS v4](https://tailwindcss.com/) — styling
- [Oxlint](https://oxc.rs/) — linting
- [@fawazahmed0/currency-api](https://github.com/fawazahmed0/exchange-api) — free exchange-rate data

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed

### Installation

```bash
# install dependencies
npm install

# start the dev server
npm run dev
```

Then open the URL shown in the terminal (usually http://localhost:5173).

## 📜 Available Scripts

| Command           | What it does                          |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Start the local development server    |
| `npm run build`   | Build the app for production          |
| `npm run preview` | Preview the production build locally  |
| `npm run lint`    | Run Oxlint to check the code          |

## 📁 Project Structure

```
src/
├── App.jsx             # main component — holds state and wires everything together
├── inputcomponent.jsx  # reusable input box (amount field + currency dropdown)
├── currency_hook.js    # custom hook that fetches exchange rates for a currency
├── main.jsx            # app entry point
└── assets/             # images
```

## 🔍 How It Works

1. `currency_hook.js` is a **custom hook** (`Usecurrency`) that takes a currency code
   (e.g. `inr`) and fetches its exchange rates from the API. It re-fetches whenever the
   currency changes.
2. `App.jsx` keeps track of the amount, the "From" currency, and the "To" currency in
   state, and gets the rates from the hook.
3. `inputcomponent.jsx` is a **reusable component** used for both the "From" and "To"
   boxes — it renders the amount input and the currency dropdown.
4. Clicking **Convert** multiplies the amount by the exchange rate of the selected
   "To" currency and shows the result.

## 📝 Note

This is a learning project built while studying React fundamentals (state, props,
custom hooks, and component reuse).
