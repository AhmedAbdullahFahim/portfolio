# Ahmed Fahim - Portfolio Website

A beautiful, modern portfolio website built with React and Vite, featuring a dark blue theme, smooth animations, and an interactive spotlight effect.

## ✨ Features

- **Modern Design**: Dark blue themed portfolio with beautiful gradients and animations
- **Interactive Spotlight Effect**: Mouse-following spotlight for enhanced visual appeal
- **Smooth Animations**: Framer Motion powered animations with scroll-triggered effects
- **Responsive Design**: Fully responsive across all devices
- **Smooth Scrolling**: Seamless navigation between sections
- **Contact Form**: Interactive contact form for potential clients
- **Project Showcase**: Dynamic project filtering and presentation

## 🚀 Tech Stack

- **React 18** - Frontend framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icons
- **React Intersection Observer** - Scroll animations

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🛠️ Installation & Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎨 Customization

### Colors
The portfolio uses a custom dark blue color palette defined in `tailwind.config.js`:
- Primary: Dark blue shades (900-500)
- Accent: Blue shades (500-300)

### Content
Update personal information in the following components:
- `Hero.jsx` - Name, title, description, social links
- `About.jsx` - Personal information and stats
- `Experience.jsx` - Work experience and education
- `Projects.jsx` - Portfolio projects
- `Contact.jsx` - Contact information

### Animations
Animations can be customized in:
- `tailwind.config.js` - Custom animations and keyframes
- `index.css` - CSS animations and effects
- Individual components - Framer Motion variants

## 📞 Contact Information

- **Name**: Ahmed Abdullah Fahim
- **Email**: ahmed.abdallah5022@gmail.com
- **Phone**: +201062535799
- **Location**: Cairo, Egypt
- **GitHub**: [AhmedAbdullahFahim](https://github.com/AhmedAbdullahFahim)
- **LinkedIn**: [ahmed-abdullah-fahim](https://www.linkedin.com/in/ahmed-abdullah-fahim/)

## 🚀 Deployment

This project can be deployed to various platforms:

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run: `npm run deploy`

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

Made with ❤️ and lots of coffee ☕ by Ahmed Fahim 