# Subscriptions Dashboard

A responsive subscriptions dashboard built to explore data-driven UI, filtering logic, and real-world layout constraints.

The project focuses on **structure first**, then layering behaviour on top via React.

---

## Overview

The app displays a list of subscriptions and one-off payments with:

- Sidebar summary
- Monthly total calculation
- Status & type filtering
- Responsive grid layout

UI is fully driven by a single data source.

---

## Features

### Rendering
- Subscriptions defined in `/data/Subscriptions.js`
- Cards rendered via `.map()`
- No duplicated markup

### State
- Filter by:
  - Subscription type
  - Active / inactive status
- Filters are composable
- Original dataset remains immutable

### UI
- Grid-based card layout
- Normalised icon sizing (mixed SVG sources)
- Clear visual distinction between:
  - Active
  - Inactive
  - One-off items
- Responsive across desktop, tablet, mobile

---

## Project Structure

src/
├── components/
│   ├── Sidebar.jsx
│   ├── Content.jsx
│   ├── Filters.jsx
│   ├── SubscriptionCard.jsx
│   ├── Icons.jsx
│   └── FilterIcons.jsx
├── data/
│   └── Subscriptions.js
├── styles/
│   └── index.css
├── App.jsx
└── main.jsx

---

## Implementation Notes

- HTML structure was completed **before** introducing React
- CSS layout and responsiveness were finalised prior to componentisation
- React is used for:
  - Data mapping
  - Conditional classes
  - Filter state
- No external UI libraries

---

## Tech Stack

- React
- JavaScript (ES6+)
- CSS (Grid, Flexbox)
- Vite

---

## Author

Charles Warburg