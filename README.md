# MenPoruzhTech Portfolio Website

A highly animated, visually appealing company portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## 🚀 Features

### Pages
- **Home**: Animated hero with typing effect, smooth entry animations, and interactive sections
- **About**: Timeline animation for company journey with scroll-triggered fade-ins
- **Services**: Grid of service cards with hover effects, glassmorphism, and smooth transitions
- **Portfolio**: Interactive project showcase with 3D hover effects and animated modal popups
- **Contact**: Form with floating labels, validation, and email integration

### Animations & Transitions
- Framer Motion for fade-in, slide-up, staggered animations on scroll
- Parallax scrolling effects for background images
- Animated page transitions between routes
- Hover animations for buttons, links, and cards
- Animated dark/light mode toggle with sun/moon morph animation

### Styling
- Custom neon gradient theme (#00C9FF → #92FE9D)
- Dark mode background (#0A0A0A)
- Glassmorphism cards with blurred backgrounds
- Rounded edges, shadows, gradients, and glowing hover borders
- Minimal but futuristic aesthetic

### Components
- **Navbar**: Sticky navigation with animated underlines
- **Hero Section**: Large headlines with typing effects and gradient animations
- **Service Cards**: 3D hover tilt effects
- **Portfolio Cards**: Hover reveals with animated modal popups
- **Footer**: Animated social icons with hover glow effects

## 🛠 Tech Stack

- **Framework**: Next.js 15+ with App Router
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email**: Nodemailer for contact form
- **Deployment**: Optimized for Vercel

## 📦 Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/menporuzh/portfolio-website.git
cd portfolio-website
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Set up environment variables:
\`\`\`bash
cp .env.example .env.local
\`\`\`

Add your email configuration:
\`\`\`env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_TO=contact@menporuzh.tech
\`\`\`

4. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Manual Deployment
\`\`\`bash
npm run build
npm start
\`\`\`

## 📧 Email Configuration

For the contact form to work, you need to configure email settings:

1. **Gmail**: Use App Passwords for authentication
2. **Other providers**: Update EMAIL_HOST and EMAIL_PORT accordingly
3. **Environment variables**: Set all required email variables

## 🎨 Customization

### Colors
Update the neon gradient colors in `app/globals.css`:
\`\`\`css
:root {
  --neon-cyan: #00c9ff;
  --neon-green: #92fe9d;
}
\`\`\`

### Content
- Update company information in components
- Replace placeholder images with your own
- Modify service offerings and portfolio projects
- Customize team member information

### Animations
Adjust animation settings in component files:
- Duration and delay values
- Easing functions
- Trigger points for scroll animations

## 📱 Responsive Design

The website is fully responsive across:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1440px+)

## ⚡ Performance

- Lazy loading for images and animations
- Optimized bundle size
- SEO-friendly with metadata
- Fast loading times (<2s)
- Lighthouse score: 95+

## 🔧 Development

### Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Project Structure
\`\`\`
├── app/                 # Next.js app directory
├── components/          # Reusable components
├── public/             # Static assets
├── styles/             # Global styles
└── types/              # TypeScript types
\`\`\`

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📞 Support

For support, email contact@menporuzh.tech or create an issue on GitHub.

---

Built with ❤️ by MenPoruzhTech using Next.js and Framer Motion.
