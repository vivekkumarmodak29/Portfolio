# Design Guidelines: Vivek Kumar Modak Portfolio

## Design Approach
**Reference-Based Futuristic Tech Portfolio** - Drawing inspiration from cutting-edge portfolio sites like Bruno Simon, Awwwards winners, and cyberpunk aesthetics. This is an animation-heavy, visually immersive experience showcasing AI/ML expertise through futuristic design language.

## Core Design Principles
1. **Cyberpunk Futurism**: Neon accents, glassmorphism, holographic effects
2. **Motion-First**: Every element should have purposeful animation
3. **3D Integration**: Blend 2D content with 3D visual elements seamlessly
4. **Tech Authenticity**: Design reflects AI/ML domain expertise

## Typography
- **Primary Font**: 'Orbitron' or 'Rajdhani' (Google Fonts) - geometric, tech-inspired
- **Secondary Font**: 'Inter' or 'Space Grotesk' for body text
- **Hierarchy**: 
  - Hero Name: text-6xl to text-8xl, font-bold, tracking-wider
  - Section Headers: text-4xl to text-5xl, font-semibold
  - Project Titles: text-2xl to text-3xl, font-medium
  - Body Text: text-base to text-lg, leading-relaxed

## Layout System
**Spacing Primitives**: Use Tailwind units of 4, 8, 12, 16, 24, 32 (p-4, m-8, gap-12, etc.)
- Section padding: py-24 to py-32 (desktop), py-12 to py-16 (mobile)
- Component spacing: gap-8 to gap-12 for grids
- Micro-spacing: p-6 for cards, gap-4 for inline elements

## Component Library

### Hero Section
- **Layout**: Asymmetric split - 3D character model (40% width) positioned left/center, name and title on right with animated particle background
- **3D Character**: Placeholder for GLB/GLTF model of person in dynamic pose, integrated with React Three Fiber
- **Name Treatment**: Large geometric typography with neon glow effect, staggered letter animation on load
- **Background**: Animated particle system (stars/dots), gradient mesh, floating geometric shapes

### Animated Chatbot
- **Design**: Cute 3D mascot character (simple geometric robot/AI companion)
- **Behavior**: Floats at screen edge, follows scroll position with spring physics, bounces/waves periodically
- **States**: Idle (floating), Moving (gliding animation), Interacting (bounce + speech bubble appears)
- **Position**: Fixed positioning, moves between predefined waypoints as user scrolls through sections

### Professional Summary
- **Layout**: Full-width section with translucent glassmorphic card overlay
- **Background**: Slow-moving gradient animation, subtle grid pattern
- **Content**: 2-column on desktop (summary left, key stats/highlights right), single column mobile

### Skills Showcase
- **Layout**: Responsive grid (grid-cols-2 md:grid-cols-3 lg:grid-cols-4)
- **Cards**: Glassmorphic containers with backdrop-blur, border with neon gradient
- **Animation**: Stagger reveal on scroll, hover lifts card with glow effect, icons rotate/pulse
- **Content**: Skill icon (from icon library), skill name, proficiency indicator (animated progress bar)

### Projects Grid
- **Layout**: Masonry-style grid or 2-column layout (lg:grid-cols-2)
- **Project Cards**: Large format with hover expansion
  - Project title with tech badge pills
  - Description (2-3 sentences)
  - Key features as bullet points with icons
  - Tech stack icons row at bottom
- **Interaction**: Hover reveals animated overlay with "View Details" area, card tilts slightly

### Experience Timeline
- **Layout**: Vertical timeline with animated connection line
- **Internship Card**: Glassmorphic container, company logo placeholder, duration, role, achievements with checkmark icons
- **Animation**: Line draws in on scroll, cards fade up sequentially

### Certificates Gallery
- **Layout**: Grid display (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- **Certificate Cards**: Image container with glassmorphic frame, certificate name overlay, issue date
- **Interaction**: Modal opens on click showing full certificate image, smooth zoom animation
- **Certificates**: SQL, AI For India 2.0, Machine Translation, Power BI, Internship certificate (display all 6)

### Navigation
- **Type**: Fixed top navbar with glassmorphic background, backdrop-blur
- **Elements**: Logo/name on left, section links center, CTA button (Contact/Resume) right
- **Behavior**: Hide on scroll down, reveal on scroll up, smooth transitions

### Footer
- **Layout**: 3-column grid (About snippet, Quick links, Social/Contact)
- **Design**: Dark with neon accent borders, minimal padding
- **Elements**: Email, phone, LinkedIn, GitHub links with icons, copyright

## Visual Effects & Animations

### Background Treatments
- **Particle Systems**: Floating dots/stars that respond to mouse movement
- **Gradient Meshes**: Animated color gradients shifting slowly
- **Geometric Patterns**: Subtle grid lines, hexagon patterns with glow
- **Scan Lines**: Subtle horizontal scan effect overlay (cyberpunk aesthetic)

### Scroll Animations
- **Section Reveals**: Fade up with slight scale, stagger child elements
- **Parallax**: Background elements move at different speeds
- **Number Counters**: Animate stats/metrics counting up when visible
- **Progress Indicators**: Skill bars fill in on scroll into view

### Micro-Interactions
- **Hover States**: Lift, glow, slight rotation for cards
- **Button Interactions**: Neon border pulse, background shimmer
- **Link Hovers**: Underline slide-in animation
- **Focus States**: Strong neon outline for accessibility

### Chatbot Animations
- **Idle**: Gentle float/bob with rotation
- **Movement**: Smooth bezier curve path following, subtle trail effect
- **Interaction Prompt**: Bounce, scale pulse, speech bubble appear with typing dots
- **Transitions**: Spring physics for natural movement

## Images

### Hero 3D Character
- **Type**: Placeholder 3D model (GLB format) or illustrated character in tech pose
- **Style**: Futuristic, minimalist, wireframe aesthetic or low-poly design
- **Position**: Left 40% of hero section, integrated with particle background
- **Animation**: Gentle rotation, ambient lighting changes

### Certificate Images
- **All 6 certificates** from attached files displayed as thumbnail cards
- Certificates: SQL (SkillUp), AI For India 2.0 (Guvi), Machine Translation, Power BI, Internship certificate, Additional certificate
- Format: Maintain aspect ratio, add subtle border glow effect

### Project Thumbnails (Optional Placeholders)
- Tech-themed abstract graphics or code screenshots for each of 5 projects
- Use gradient overlays with project-specific accent colors

## Accessibility
- Maintain WCAG AA contrast ratios despite neon aesthetics
- Provide reduced motion alternative via prefers-reduced-motion media query
- All animations can be paused/reduced for accessibility
- Keyboard navigation for all interactive elements
- Proper heading hierarchy and semantic HTML

## Responsive Behavior
- **Desktop (lg+)**: Full multi-column layouts, complex animations active
- **Tablet (md)**: 2-column grids, simplified 3D elements
- **Mobile (base)**: Single column stacks, reduced animation complexity, chatbot scales down
- Hamburger menu for mobile navigation with animated slide-in

## Technical Implementation Notes
- Use Framer Motion or GSAP for complex animations
- React Three Fiber for 3D elements integration
- Intersection Observer API for scroll-triggered animations
- CSS backdrop-filter for glassmorphism effects
- Optimize animations for 60fps performance