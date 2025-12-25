# 🚀 Hackathon Starter Kit

Production-ready React starter for rapid hackathon development.

## ✨ Features

### 🎨 4 Modern Themes (Light & Dark)
- **Minimal** - Clean design
- **Glassmorphism** - Modern glass effects
- **Neo-brutalism** - Bold brutalist design
- **Corporate** - Professional look

### 🧩 Complete Component Library
Buttons, Cards, Inputs, Modals, Toasts, Alerts, Spinner, Select, Checkbox, and more

### 🔐 Authentication
Login, Register, Protected Routes, Auth Context

### 📱 Responsive Layout
Navbar, Sidebar, Footer - all mobile-responsive

## 🛠 Quick Start

```bash
npm install
npm run dev
```

## 🎨 Theme System

```jsx
import { useTheme } from '@/contexts/ThemeContext';

const { theme, changeTheme, toggleMode } = useTheme();
changeTheme('glass'); // minimal, glass, brutal, corporate
toggleMode(); // light/dark
```

## 🔐 Authentication

```jsx
import { useAuth } from '@/contexts/AuthContext';

const { login, register, logout, user } = useAuth();
await login(email, password);
```

## 📁 Project Structure

```
src/
├── components/
│   ├── common/          # Reusable components
│   └── layout/          # Layout components
├── pages/               # Page components
├── contexts/            # React contexts
├── hooks/               # Custom hooks
├── services/            # API services
├── utils/               # Utilities
└── routes/              # Routes
```

## 🧩 Component Usage

### Button
```jsx
<Button variant="primary" size="lg" loading={isLoading}>
  Click Me
</Button>
```

### Input
```jsx
<Input label="Email" type="email" icon={Mail} error={errors.email} />
```

### Toast
```jsx
const { success, error } = useToast();
success('Operation completed!');
```

## 🚀 Deployment

```bash
npm run build
```

Deploy `dist` folder to Vercel, Netlify, AWS S3, or any static host.

## 📝 Environment Variables

Create `.env`:
```
VITE_API_URL=https://your-api.com/api
```

## 🎯 Singularity Special

1. Pick your theme early
2. Customize colors in `src/styles/index.css`
3. Add new pages by copying existing structure
4. Reuse components - everything is modular
5. Focus on features - UI is ready!


## Contributing

1. Fork the repository
2. Create a feature branch
3. Follow the existing code style
4. Add tests for new features
5. Submit a pull request
---

## 📜 License

This project is licensed under MIT License. Use freely and get ahead of the curve.

## 👨‍💻 Author

Credits: Saman Pandey

**Built with ❤️ for hackathon developers**
Happy Hacking! 🚀