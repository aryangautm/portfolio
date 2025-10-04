# 🚀 Portfolio Website

A modern, beautiful, and fully responsive portfolio website built with React, TypeScript, and Framer Motion.

## ✨ Features

- 🎨 **Clean & Modern UI** - Eye-catching design with smooth animations
- 🌓 **Light/Dark Mode** - Toggle between themes with smooth transitions
- 📱 **Fully Responsive** - Works perfectly on all devices
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and build times
- 🎭 **Smooth Animations** - Powered by Framer Motion
- 📊 **GitHub Contributions Graph** - Visual representation of your coding activity
- 💼 **Projects Showcase** - Highlight your best work with images and descriptions
- 📝 **Blog Section** - Share your thoughts and learnings (separate page)
- 👥 **Visitor Counter** - Track portfolio visitors with a simple backend
- 🔗 **Social Links** - Easy access to all your social profiles
- 📍 **Sticky Footer** - Contact info always visible

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Routing
- **React Icons** - Icon library

### Backend (Optional - for visitor counter)
- **Express.js** - Server framework
- **CORS** - Cross-origin resource sharing
- **Node.js** - Runtime environment

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Frontend Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Backend Setup (Optional)

The backend is only needed for the visitor counter feature. If you don't need it, the app will work fine with localStorage as a fallback.

1. **Navigate to server directory**
   ```bash
   cd server
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   npm start
   ```

   For development with auto-reload:
   ```bash
   npm run dev
   ```

4. **Server will run on**
   `http://localhost:3001`

## 🎨 Customization

### Personal Information

Update the following files with your information:

1. **Hero Section** (`src/components/Hero.tsx`)
   - Name
   - Location
   - Bio
   - Profile image
   - Social links

2. **Skills** (`src/components/Skills.tsx`)
   - Add/remove technologies
   - Update skill icons

3. **Experience** (`src/components/Experience.tsx`)
   - Add your work experience
   - Update company logos and details

4. **Projects** (`src/components/Projects.tsx`)
   - Add your projects
   - Update project images, descriptions, and links

5. **Contact** (`src/components/Contact.tsx`)
   - Update social media links
   - Change contact information

6. **Blog Posts** (`src/pages/BlogsPage.tsx`)
   - Add your blog posts
   - Update post images and content

### Theme Colors

Customize colors in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      // Your custom colors here
    }
  }
}
```

### GitHub Contributions

To show real GitHub contributions instead of mock data:

1. Use GitHub's GraphQL API
2. Update `src/components/GitHubGraph.tsx`
3. Add your GitHub username and personal access token

Example API call:
```typescript
const query = `
  query($userName:String!) {
    user(login: $userName){
      contributionsCollection {
        contributionCalendar {
          weeks {
            contributionDays {
              date
              contributionCount
            }
          }
        }
      }
    }
  }
`;
```

## 🚀 Deployment

### Frontend Deployment

#### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

#### Netlify
```bash
npm run build
# Upload the 'dist' folder to Netlify
```

### Backend Deployment

#### Render
1. Create a new Web Service
2. Connect your repository
3. Set build command: `cd server && npm install`
4. Set start command: `cd server && npm start`

#### Railway
1. Create a new project
2. Connect your repository
3. Set root directory to `server`
4. Deploy

### Environment Variables

Create a `.env` file in the root directory:
```env
VITE_API_URL=https://your-backend-url.com
```

## 📝 Scripts

### Frontend
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

### Backend
```bash
npm start          # Start server
npm run dev        # Start server with auto-reload
```

## 🎯 Best Practices Implemented

- ✅ TypeScript for type safety
- ✅ Component-based architecture
- ✅ Responsive design with mobile-first approach
- ✅ SEO-friendly meta tags
- ✅ Optimized images and assets
- ✅ Clean and maintainable code structure
- ✅ Smooth animations with Framer Motion
- ✅ Accessible UI components
- ✅ Dark mode support
- ✅ Fast loading times

## 📂 Project Structure

```
portfolio/
├── src/
│   ├── components/          # React components
│   │   ├── Hero.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── GitHubGraph.tsx
│   │   ├── Projects.tsx
│   │   ├── Blog.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── ThemeToggle.tsx
│   ├── contexts/            # React contexts
│   │   └── ThemeContext.tsx
│   ├── pages/               # Page components
│   │   ├── Home.tsx
│   │   └── BlogsPage.tsx
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── server/                  # Backend server
│   ├── index.js
│   └── package.json
├── public/                  # Static assets
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🤝 Contributing

Feel free to fork this project and customize it for your own use!

## 📄 License

MIT License - feel free to use this project for your portfolio!

## 🎨 Design Inspiration

This portfolio is inspired by modern design principles:
- Clean and minimalist aesthetic
- Consistent use of icons and imagery
- Good use of whitespace
- Smooth animations and transitions
- Professional yet approachable tone

## 💡 Tips for Customization

1. **Replace placeholder content** with your actual information
2. **Add your own images** to the projects and blog sections
3. **Update social links** with your real profiles
4. **Customize colors** to match your personal brand
5. **Add more sections** if needed (e.g., testimonials, certifications)
6. **Optimize images** before adding them to the project
7. **Test responsiveness** on different devices
8. **Update meta tags** for better SEO

## 🐛 Known Issues

- GitHub contribution graph uses mock data by default (see customization section)
- Visitor counter needs backend to be running (falls back to localStorage)

## 📧 Contact

If you have any questions or suggestions, feel free to reach out!

---

**Made with ❤️ and a lot of ☕**
