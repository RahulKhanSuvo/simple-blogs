# Blog Viewer Application

A simple blog viewer application built with **Next.js** to demonstrate routing, server and client components, dynamic routes, authentication, and data fetching.

---

## Features

- **Home Page**: Displays a list of blog post titles fetched from a mock API.
- **Dynamic Routing**: View blog details using a dynamic route (`/blog/[id]`).
- **Authentication**: Profile page protected by **Kinde Auth**.
- **Navigation**: Includes links to "Home" and "Profile" with authentication-based buttons (Login/Logout).
- **Styling**: Designed with **Tailwind CSS** for a clean and responsive layout.

---

## Technologies Used

- **Next.js**: Framework for React with server-side rendering.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Kinde Auth**: Authentication library for securing the profile page.
- **Mock API**: Used [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for fetching blog posts.

---

## Pages

### 1. **Home Page (`/`)**
- Fetches blog posts from `https://jsonplaceholder.typicode.com/posts`.
- Displays blog titles as links to individual blog detail pages.

### 2. **Blog Details Page (`/blog/[id]`)**
- Dynamic route that fetches blog details from `https://jsonplaceholder.typicode.com/posts/[id]`.
- Displays the title and content of a specific blog post.

### 3. **Profile Page (`/profile`)**
- Protected page that requires authentication using **Kinde Auth**.
- Displays a static message: `"Welcome to your profile!"`.
- Redirects unauthenticated users to the login page.

---