# Stockify - Commodities Management Dashboard

A modern, responsive web application for managing commodities inventory with role-based access control.

## Features

- **Authentication**: Login with role-based access (Manager/Store Keeper)
- **Dashboard**: Overview stats for managers (Total Products, Low Stock Items, Categories)
- **Products Management**: View, add, edit, and delete products
- **Role-Based Access**:
  - Manager: Full access to dashboard and product management
  - Store Keeper: View-only access to products
- **Dark Mode**: Toggle between light and dark themes
- **Responsive Design**: Works on desktop and mobile devices
- **Search Functionality**: Search products by name or category

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context
- **Icons**: Emoji (for simplicity)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd stockify
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

### Test Accounts - Login Credentials ✅

#### 🔐 Manager Account (Full Access)
```
Email:    manager@test.com
Password: password
```
**Features:** Dashboard access, Add/Edit/Delete products, View all features

#### 👤 Store Keeper Account (View Only)
```
Email:    store@test.com
Password: password
```
**Features:** View products only, No edit/delete permissions

### Navigation

- Use the sidebar to navigate between Dashboard (Manager only) and Products
- Toggle dark mode using the button in the top navbar
- Logout using the sidebar button

### Managing Products

- **Search**: Use the search bar to filter products
- **Add Product** (Manager only): Click "Add Product" button
- **Edit Product** (Manager only): Click "Edit" in the Actions column
- **Delete Product** (Manager only): Click "Delete" in the Actions column

## Project Structure

```
stockify/
├── app/
│   ├── dashboard/
│   ├── login/
│   ├── products/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Layout.tsx
│   └── ProductModal.tsx
├── context/
│   ├── AuthContext.tsx
│   └── ThemeContext.tsx
├── lib/
│   └── data.ts
├── package.json
├── tailwind.config.js
└── README.md
```

## Development

- Run linting: `npm run lint`
- Build for production: `npm run build`
- Start production server: `npm run start`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.