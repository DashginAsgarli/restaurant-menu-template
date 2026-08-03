# TasteNest — Modern Restaurant Web Application


TasteNest is a full-featured restaurant web app with a clean, responsive UI. Users can browse the menu, add items to their cart, save favourites to a wishlist, and manage their profile all powered by **React Context API**, with zero Redux and zero backend.

---

## Screenshot
<img width="1334" height="590" alt="image" src="https://github.com/user-attachments/assets/dab3ba2d-5b27-4711-b03b-c2bf086a23f3" />


---

## Features

- **Shopping Cart** — add, remove, increase and decrease quantity, with a live badge count on the navbar icon
- **Wishlist** — save and manage favourite items; requires login, protected route
- **Shop Filtering** — filter by category, search by name, sort by price or rating in real time
- **Product Detail** — full product page with related items and add-to-cart action
- **Cart Page** — order summary, delivery fee calculation, promo code input field
- **Profile Page** — user stats, order history, editable display name
- **Contact Form** — working form with success state feedback on submission

---

## Tech Stack

![React](https://img.shields.io/badge/-React_18-61DAFB?style=flat-square&logo=react&logoColor=black)
![Router](https://img.shields.io/badge/-React_Router_v6-CA4245?style=flat-square&logo=reactrouter&logoColor=white)
![Tailwind](https://img.shields.io/badge/-Tailwind_CSS-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)
![Icons](https://img.shields.io/badge/-React_Icons_(fi)-F97316?style=flat-square)
![Context](https://img.shields.io/badge/-Context_API-A855F7?style=flat-square&logo=react&logoColor=white)

---

## Project Structure

```
src/
├── assets/
├── context/
├── components/
│   ├── auth/
│   ├── cart/
│   ├── header/
│   ├── footer/
│   └── main/
└── pages/
```

## Provider Wrapping Order

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

## Getting Started

**Prerequisites**

![Node](https://img.shields.io/badge/Node.js-v18+-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![npm](https://img.shields.io/badge/npm-or_yarn-CB3837?style=flat-square&logo=npm&logoColor=white)

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

## Known Limitations

- **Mock Authentication** — no backend is connected. Replace `login()` and `register()` in `AuthContext.jsx` with real API calls before deploying to production.
- **In-memory State** — cart and wishlist data resets on page refresh. Integrate `localStorage` or a backend API to persist data between sessions.
- **Hardcoded Products** — all product data lives in `ShopPage.jsx` and `ProductDetailPage.jsx`. Replace with API calls as your data grows.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

<div>

[![Email](https://img.shields.io/badge/Gmail-dashqinasgarli%40gmail.com-ea4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:dashqinasgarli@gmail.com)
&nbsp;
[![Issues](https://img.shields.io/badge/Report-Issue-e11d48?style=for-the-badge&logo=github)](https://github.com/DashginAsgarli/restaurant-menu-template/issues)

</div>
