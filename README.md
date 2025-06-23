# 🌦️ Redux Toolkit Weather App

A modern, responsive weather forecasting web application built with **React**, **Redux Toolkit**, and **Tailwind CSS**, featuring live data from the **OpenWeatherMap API**. Users can search for cities, view current weather conditions, and manage a list of favourite locations.

---

## 🚀 Features

- 🔍 **City Weather Search** – Fetch real-time weather data using OpenWeatherMap API.
- ⭐ **Add to Favourites** – Save cities to your personal favourites list.
- 🎨 **Dynamic Backgrounds** – Background images adapt to the current weather condition.
- ⚡ **Redux Toolkit** – Modern state management with slices and async thunks.
- 💅 **Tailwind CSS + Framer Motion** – Elegant and animated UI/UX.
- 📱 **Responsive Design** – Fully optimized for mobile, tablet, and desktop.

---

## 🖼️ Preview

> ![image](https://github.com/user-attachments/assets/1c6fbc93-6c9c-4114-bf62-87185291d932)


---

## 🛠️ Tech Stack

| Tech               | Description                          |
|--------------------|--------------------------------------|
| **React**          | Frontend framework                   |
| **Redux Toolkit**  | State management                     |
| **Tailwind CSS**   | Utility-first CSS framework          |
| **Framer Motion**  | UI Animations                        |
| **Axios**          | API requests                         |
| **OpenWeatherMap** | Weather data provider                |

---

## 🌐 API Used

- **OpenWeatherMap API**  
  Get your free API key: [https://openweathermap.org/api](https://openweathermap.org/api)

---

## 📁 Project Structure

```
/src
  ├── components         # Reusable components (GridLayout, Loader, etc.)
  ├── features           # Redux slices for weather and favourites
  ├── pages              # Main page(s) like Weather.jsx
  ├── store              # Redux store setup
  ├── utils              # Utility functions (e.g., background image logic)
  ├── App.jsx
  └── main.jsx
```

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/MuhammadUzairAbbasi/Redux-ToolKit-Practice-Weather-App.git
cd Redux-ToolKit-Practice-Weather-App
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root:

```env
VITE_API_URL=https://api.openweathermap.org/data/2.5/weather?
VITE_WEATHER_API=your_api_key_here
```

### 4. Start the Development Server

```bash
npm run dev
```

---

## 📦 Build for Production

```bash
npm run build
```

---

## 🤝 Contributing

Pull requests are welcome! If you find bugs or have suggestions, feel free to open an issue or submit a PR.

## 🙌 Author

**Muhammad Uzair Abbasi**  
[GitHub](https://github.com/MuhammadUzairAbbasi)
