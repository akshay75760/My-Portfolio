# Akshay Kumar - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, Vite, and Tailwind CSS. Features a clean design with dark/light theme toggle and showcases education, skills, projects, and certifications.

## 🚀 Features

- **Modern Stack**: React 18 + TypeScript + Vite
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark/Light Theme**: Toggle between themes with persistent storage
- **Fast Performance**: Optimized builds with Vite
- **SEO Optimized**: Meta tags and semantic HTML
- **Accessible**: WCAG compliant design

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Deployment**: Vercel, Netlify, GitHub Pages ready

## 📋 Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/akshay75760/My-Portfolio.git
   cd My-Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 🚀 Deployment Options

### 1. Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/akshay75760/My-Portfolio)

**Manual deployment:**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
npm run deploy:vercel
```

### 2. Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/akshay75760/My-Portfolio)

**Manual deployment:**
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build and deploy
npm run build
npm run deploy:netlify
```

### 3. GitHub Pages

GitHub Pages deployment is automated via GitHub Actions. Just push to the `main` branch and the site will be deployed automatically.

**Manual setup:**
1. Go to Repository Settings
2. Navigate to Pages section
3. Select "GitHub Actions" as source
4. Push to main branch to trigger deployment

### 4. Other Platforms

The built `dist/` folder can be deployed to any static hosting service:
- Firebase Hosting
- Surge.sh
- AWS S3
- Digital Ocean App Platform

## 📁 Project Structure

```
My-Portfolio/
├── public/
│   └── Akshay_Resume.pdf
├── src/
│   ├── components/
│   │   ├── Certifications.tsx
│   │   ├── Contact.tsx
│   │   ├── Education.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   ├── contexts/
│   │   └── ThemeContext.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .github/
│   └── workflows/
│       └── deploy.yml
├── dist/ (generated after build)
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
├── vercel.json
└── netlify.toml
```

## 🔄 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run deploy:vercel` - Deploy to Vercel
- `npm run deploy:netlify` - Deploy to Netlify

## 🌐 Environment Variables

No environment variables are required for this project.

## 📝 Customization

1. **Update personal information** in the components
2. **Modify colors** in `tailwind.config.js`
3. **Add new sections** by creating components and importing them in `App.tsx`
4. **Update meta tags** in `index.html`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Commit and push to your branch
5. Create a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **GitHub**: [@akshay75760](https://github.com/akshay75760)
- **Email**: [Contact via website](https://your-deployed-site.com)

---

Built with ❤️ using React, TypeScript, and Tailwind CSS