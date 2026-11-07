# Crystals Business Solution (CBS) - React Web Application

This project has been converted from static HTML/PHP templates into a modern, responsive Single Page Application (SPA) powered by **React 18**, **Vite**, and **React Router DOM v6**.

---

## 📁 Project Structure

```
maincbs/
├── frontend/                     # React application
│   ├── public/                   # Static assets (images, css, icons)
│   ├── src/
│   │   ├── components/           # Reusable components (Navbar, Topbar, Footer, Layout)
│   │   ├── pages/                # Application routes
│   │   │   ├── Home.jsx          # Homepage with Hero Carousel, Services preview, Testimonials
│   │   │   ├── About.jsx         # About Us, Values, Approach, Why Choose CBS
│   │   │   ├── Services.jsx      # All services listing
│   │   │   ├── ServiceDetail.jsx # Dynamic & detail service view
│   │   │   ├── Products.jsx      # Products (Aim4thestars, Crystal Kleen, Techmind)
│   │   │   ├── Careers.jsx       # Careers page
│   │   │   ├── Contact.jsx       # Interactive Contact form & Google Maps
│   │   │   └── Book.jsx          # Request a Quote form
│   │   ├── servicesData.js       # Centralized service offerings data
│   │   ├── App.jsx               # Route definitions
│   │   └── main.jsx              # React app entry point
│   ├── package.json              # Dependencies and build scripts
│   └── vite.config.js            # Vite build configuration
├── css/                          # Original styles
├── img/                          # Original images and PDFs
└── [legacy .html / .php files]   # Preserved original files
```

---

## 🚀 Getting Started

### 1. Development Mode
To start the Vite development server with Hot Module Replacement (HMR):
```bash
cd frontend
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 2. Production Build
To create an optimized production build:
```bash
cd frontend
npm run build
```
The output files will be generated in `frontend/dist/`.

### 3. Preview Production Build
```bash
cd frontend
npm run preview
```

