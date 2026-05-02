# 🍽️ Modern Restaurant Web Application

<br/>
<div>

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit-ffffff?style=for-the-badge&logoColor=black&color=000000)](https://dashginasgarli.github.io/restaurant-menu-template/)
[![GitHub](https://img.shields.io/badge/GitHub-Repo-ffffff?style=for-the-badge&logo=github&logoColor=white&color=000000)](https://github.com/DashginAsgarli/restaurant-menu-template.git)

</div>

TasteNest is a full-featured restaurant web app with a clean, responsive UI. Users can browse the menu, add items to their cart, save favourites to a wishlist, and manage their profile — all powered by **React Context API** with zero Redux and zero backend.


---

## ✦ Features

<br />

>[!TIP]
> - **Shopping Cart** - Add, remove, increase and decrease quantity. Live badge count on the navbar icon. <br/>
> - **Wishlist** - Save and manage favourite items. Requires login — protected route. <br/>
> - **Shop Filtering** - Filter by category, search by name, sort by price or rating in real time. <br/>
> - **Product Detail** - Full product page with related items and add-to-cart action. <br/>
> - **Cart Page** - Order summary, delivery fee calculation, promo code input field. <br/>
> - **Profile Page** - User stats, order history, editable display name. <br/>
> - **Contact Form** - Working form with success state feedback on submission. <br/>

---

## ✦ Tech Stack

![React](https://img.shields.io/badge/-React_18-61DAFB?style=flat-square&logo=react&logoColor=black)
![Router](https://img.shields.io/badge/-React_Router_v6-CA4245?style=flat-square&logo=reactrouter&logoColor=white)
![Tailwind](https://img.shields.io/badge/-Tailwind_CSS-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)
![Icons](https://img.shields.io/badge/-React_Icons_(fi)-F97316?style=flat-square)
![Context](https://img.shields.io/badge/-Context_API-A855F7?style=flat-square&logo=react&logoColor=white)

---

## ✦ Project Structure

```
src/
├── 📁 assets/                      
├── 📁 context/
├── 📁 components/
│   ├── 📁 auth/
│   ├── 📁 cart/
│   ├── 📁 header/
│   ├── 📁 footer/
│   └── 📁 main/
└── 📁 pages/
```

---

## ✦ Getting Started

**Prerequisites**

![Node](https://img.shields.io/badge/Node.js-v18+-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![npm](https://img.shields.io/badge/npm-or_yarn-CB3837?style=flat-square&logo=npm&logoColor=white)

<br />

**Installation**

```bash
# Clone the repository
git clone https://github.com/DashginAsgarli/restaurant-menu-template.git

# Navigate into the project
cd restaurant-menu-template

# Install dependencies
npm install

# Start the development server
npm run dev
```

---

## ✦ Provider Wrapping Order

```jsx
// main.jsx — wrap order matters
<BrowserRouter>
  <AuthProvider>          {/* 1st — auth state available everywhere */}
    <CartProvider>        {/* 2nd — cart can access auth if needed  */}
      <WishlistProvider>  {/* 3rd — wishlist can access auth        */}
        <App />
      </WishlistProvider>
    </CartProvider>
  </AuthProvider>
</BrowserRouter>
```
---

## ✦ Notes

> [!NOTE]
> **Mock Authentication** — No backend is connected. Replace `login()` and `register()` in `AuthContext.jsx` with real API calls before deploying to production.

> [!WARNING]
> **In-memory State** — Cart and wishlist data resets on page refresh. Integrate `localStorage` or a backend API to persist data between sessions.

> [!TIP]
> **Hardcoded Products** — All product data lives in `ShopPage.jsx` and `ProductDetailPage.jsx`. Replace with API calls as your data grows.


