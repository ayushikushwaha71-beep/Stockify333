# Stockify

Stockify is a modern commodities management dashboard built with Next.js, TypeScript, and Tailwind CSS.

The project focuses on role-based access control, inventory management, protected routes, and responsive dashboard design. It allows users to manage commodities efficiently through a clean and user-friendly interface.

The application supports two different user roles:

- Manager
- Store Keeper

Managers have full access to the platform, including dashboard access and product management features. Store Keepers have limited access and can only view and search products.

The project also includes dark mode support and responsive layouts for desktop and mobile devices.

## Features

### Authentication

- Login functionality with email and password
- Role-based authentication system
- Session handling using React Context and local storage

### Role-Based Access Control

Manager Permissions:
- Access dashboard
- View products
- Add products
- Edit products
- Delete products
- Access statistics

Store Keeper Permissions:
- View products
- Search products
- Read-only access

### Dashboard

The dashboard is accessible only to Managers.

It includes:
- Total products overview
- Low stock product count
- Category statistics
- Inventory insights

### Product Management

- View all products
- Search products by name
- Search products by category
- Add new products
- Edit existing products
- Delete products

### User Interface

- Responsive dashboard layout
- Sidebar navigation
- Dark and light mode support
- Clean table-based product UI
- Role-based sidebar menu visibility

## Tech Stack

Frontend Framework:
- Next.js 14 (App Router)

Language:
- TypeScript

Styling:
- Tailwind CSS

State Management:
- React Context API

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd stockify

Install dependencies:

npm install

Start the development server:

npm run dev

Open the application in your browser:

http://localhost:3000
Demo Credentials
Manager Account

Email:

manager@test.com

Password:

password

Manager Features:

Dashboard access
Full product management
Add/Edit/Delete permissions
Statistics overview
Store Keeper Account

Email:

store@test.com

Password:

password

Store Keeper Features:

View products
Search products
Limited access
No add/edit/delete permissions
Application Routes
Route	Access
/login	Public
/dashboard	Manager Only
/products	Manager and Store Keeper
Sample Products

The application includes sample product data for testing purposes.

Product	Category	Price	Quantity	Status
Rice	Grains	$50	100	Active
Wheat	Grains	$40	5	Low Stock
Sugar	Sweeteners	$30	200	Active
Coffee	Beverages	$100	20	Active
Tea	Beverages	$80	2	Low Stock
Project Structure
stockify/
├── app/
│   ├── dashboard/
│   ├── login/
│   ├── products/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── Layout.tsx
│   └── ProductModal.tsx
│
├── context/
│   ├── AuthContext.tsx
│   └── ThemeContext.tsx
│
├── lib/
│   └── data.ts
│
├── package.json
├── tailwind.config.js
└── README.md
Available Scripts

Run linting:

npm run lint

Build for production:

npm run build

Start production server:

npm run start
Live Demo
https://stockify333-wa2x.vercel.app/login


Notes
The project uses mock product data for demonstration purposes.
Authentication and role handling are implemented on the frontend.
The application was built as part of a frontend take-home assignment.

Author
Ayushi Kushwaha
