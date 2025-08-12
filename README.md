# KUNA VAMSHI Portfolio

A modern, interactive 3D portfolio website showcasing full-stack development skills, AI/ML expertise, and innovative web experiences. Built with cutting-edge technologies and featuring immersive 3D visualizations.

## 🚀 Features

- **Interactive 3D Skills Visualization** - Orbital skill spheres with real-time animations
- **Modern UI/UX Design** - Clean, responsive design with smooth transitions and animations
- **Full-Stack Development Showcase** - MERN stack projects and comprehensive skill demonstrations
- **AI/ML Expertise Display** - Specialized section highlighting machine learning and AI capabilities
- **Performance Optimized** - Fast loading with Vite and optimized 3D assets
- **Mobile Responsive** - Seamless experience across all devices and screen sizes
- **Dark/Light Theme Support** - Dynamic theme switching with persistent preferences
- **Interactive 3D Scenes** - Multiple Three.js scenes for different sections
- **Real-time Skill Filtering** - Dynamic skill categorization and filtering system

## 🛠️ Tech Stack

### Frontend & UI
- **React 18** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Advanced animations and transitions
- **Radix UI** - Accessible component primitives
- **Shadcn/ui** - Modern component library

### 3D Graphics & Visualization
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **Drei** - Useful helpers for React Three Fiber
- **Custom 3D Scenes** - Hero, Skills, and Projects visualizations

### Backend & Data
- **React Query (TanStack Query)** - Server state management
- **React Hook Form** - Form handling with validation
- **Zod** - TypeScript-first schema validation

### Development Tools
- **Vite** - Fast build tool and dev server
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **TypeScript** - Static type checking

### Additional Libraries
- **React Router DOM** - Client-side routing
- **EmailJS** - Contact form functionality
- **Lucide React** - Icon library
- **Recharts** - Data visualization
- **Sonner** - Toast notifications

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd KUNA_VAMSHI_PORTFOLIO
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
bun install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
bun dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🏗️ Build & Deployment

### Development Build
```bash
npm run build:dev
```

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── 3d/             # Three.js 3D components
│   │   ├── FloatingCube.tsx
│   │   ├── HeroScene.tsx
│   │   ├── ProjectsScene.tsx
│   │   └── SkillsScene.tsx
│   ├── layout/         # Layout components
│   │   ├── Layout.tsx
│   │   └── Navigation.tsx
│   └── ui/             # Shadcn/ui components
├── pages/              # Page components
│   ├── Home.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Achievements.tsx
│   ├── Education.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   └── NotFound.tsx
├── contexts/           # React contexts
│   └── ThemeContext.tsx
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── assets/             # Static assets
```

## 🎨 Key Features Explained

### 3D Skills Visualization
- **Orbital System**: Skills organized in concentric orbits by category
- **Interactive Hover**: Real-time skill details and proficiency levels
- **Dynamic Filtering**: Filter skills by category (Languages, Frontend, Backend, etc.)
- **Central Brain Sphere**: Animated central element representing AI/ML expertise
- **Responsive Design**: Adapts to different screen sizes and orientations

### Theme System
- **Dark/Light Modes**: Seamless theme switching
- **Persistent Preferences**: Theme choice saved in localStorage
- **Context-Aware Colors**: All components adapt to current theme

### Performance Optimizations
- **Lazy Loading**: Components loaded on demand
- **Optimized 3D Assets**: Efficient Three.js scene management
- **Suspense Boundaries**: Proper loading states for 3D content
- **Vite Build**: Fast development and optimized production builds

## 🎯 Skills Categories

The portfolio showcases expertise across multiple domains:

- **Languages**: C, C++, Python, Java, HTML, CSS
- **Frontend**: JavaScript, TypeScript, React.js, Next.js, TailwindCSS, Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, MySQL, SQL
- **Tools**: Git, GitHub, VS Code, PyCharm, Eclipse
- **AI/ML**: TensorFlow, PyTorch, Scikit-learn, Pandas, NumPy, Matplotlib, Neural Networks
- **State Management**: Redux Toolkit, Redux Query

## 🚀 Getting Started

1. **Clone and Install**: Follow the installation steps above
2. **Customize Content**: Update personal information in page components
3. **Modify 3D Scenes**: Customize 3D elements in `src/components/3d/`
4. **Update Skills**: Modify skill data in `SkillsScene.tsx`
5. **Theme Customization**: Adjust colors in `tailwind.config.ts`
6. **Add Projects**: Update project information in `Projects.tsx`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contact

- **Portfolio**: [Your Portfolio URL]
- **LinkedIn**: [Your LinkedIn]
- **GitHub**: [Your GitHub]
- **Email**: [Your Email]

---

Built with ❤️ using React, Three.js, and modern web technologies
