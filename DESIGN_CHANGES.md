# How to Make Changes to the Demo Site

This document provides instructions for making common changes to the Keidra demo site.

## Brand Colors

### Changing Brand Colors

The brand colors are defined in `index.html` in the Tailwind config section. To change colors:

1. Open `index.html`
2. Find the `tailwind.config` section (around line 12)
3. Locate the `brand` color object in the `colors` section
4. Update the color values (50-900 shades)
5. The primary brand color is `brand-500` (#3d06f8 - blue)
6. The secondary brand color is `brand-400` (#7B56FB - lighter blue)

**Current Blue Scheme:**
- Primary: `#3d06f8` (brand-500)
- Secondary: `#7B56FB` (brand-400)
- Shades: 50 (lightest) to 900 (darkest)

**To switch to Orange Scheme:**
Replace the brand colors with:
```javascript
brand: {
  50: '#fff4ed',
  100: '#ffe4d6',
  200: '#ffc9ad',
  300: '#ffa57d',
  400: '#F4A261',
  500: '#E76F51',
  600: '#d9543a',
  700: '#b8422a',
  800: '#97321f',
  900: '#7a2416',
}
```

All components using `brand-*` classes will automatically update.

## Fonts

### Changing Display Font (Headings)

The display font is defined in `index.html`:

1. Open `index.html`
2. Find the Google Fonts link (around line 10)
3. Update the font family URL to your desired font
4. Update the `fontFamily.display` in the Tailwind config

**Current:** Cabinet Grotesk
**Alternative:** Libre Baskerville (serif option)

To apply the display font to headings, use the `font-display` class:
```tsx
<h1 className="font-display font-bold">Heading Text</h1>
```

### Changing Body Font

The body font (Inter) is defined in the same section. Update the Google Fonts link and the `fontFamily.sans` value.

## Logo

### Updating the Logo

The logo is in `App.tsx`:

1. Open `App.tsx`
2. Find the logo section in the navigation (around line 86)
3. The logo consists of:
   - An icon container (currently Zap icon with gradient background)
   - The text "Keidra"
4. To change the icon, replace the `<Zap>` component with your custom SVG or icon
5. To change styling, modify the className on the logo container

The footer logo is in the same file (around line 137).

## Copy/Text Content

### Updating Landing Page Copy

All copy is in `pages/Marketing/Landing.tsx`:

1. Open `pages/Marketing/Landing.tsx`
2. Find the section you want to update
3. Look for text in:
   - `<h1>`, `<h2>`, `<h3>` tags (headings)
   - `<p>` tags (paragraphs)
   - Button text
4. Update the text directly

**Tips for better copy:**
- Be specific and concrete (avoid generic phrases)
- Use real numbers and metrics
- Write in a conversational, human tone
- Focus on benefits, not just features

### Sections in Landing.tsx:
- Hero section (line ~20)
- ROI Stats section (line ~95)
- Automated Workflows (line ~150)
- Integrations (line ~180)
- Case Studies (line ~220)
- Comparison (line ~280)
- Steps (line ~320)
- Request Demo Form (line ~350)
- Analytics (line ~420)

## Adding New Sections

### Adding a New Section to Landing Page

1. Open `pages/Marketing/Landing.tsx`
2. Find where you want to insert the section (between existing sections)
3. Add a new section following this pattern:

```tsx
{/* X. SECTION NAME */}
<section className="py-16 md:py-24 bg-white relative">
  <div className="container mx-auto px-4 sm:px-6">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
      Section Title
    </h2>
    {/* Your content here */}
  </div>
</section>
```

4. Use responsive classes:
   - `py-16 md:py-24` for vertical padding
   - `px-4 sm:px-6` for horizontal padding
   - `text-3xl sm:text-4xl md:text-5xl` for responsive text sizes

## Mobile Responsiveness

### Testing Mobile

1. Use browser DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Test at common breakpoints:
   - Mobile: 375px, 414px
   - Tablet: 768px
   - Desktop: 1024px, 1280px

### Common Mobile Issues to Check

1. **Text cutoff**: Ensure text has proper padding (`px-4 sm:px-6`)
2. **Images not loading**: Check image paths and ensure they're responsive
3. **Buttons too small**: Use `size="lg"` and ensure full width on mobile with `w-full sm:w-auto`
4. **Overflow**: Add `overflow-hidden` to containers if needed
5. **Touch targets**: Buttons should be at least 44x44px on mobile

### Responsive Classes Pattern

```tsx
// Padding
className="p-4 md:p-8"

// Text sizes
className="text-base sm:text-lg md:text-xl"

// Grid/Columns
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"

// Width
className="w-full sm:w-auto"

// Display
className="hidden md:block" // Hidden on mobile, visible on desktop
className="block md:hidden" // Visible on mobile, hidden on desktop
```

## Graphics and Visuals

### Updating Graphics

Graphics are created using:
- SVG elements
- CSS gradients
- React components
- Recharts for data visualization

**ROI Stats Section:**
- Located in `pages/Marketing/Landing.tsx` around line 95
- Uses CSS gradients and positioned elements
- Update colors by changing `brand-*` classes

**Case Studies:**
- Located in `pages/Marketing/Landing.tsx` around line 220
- Uses a carousel component
- Update case study data in the `caseStudies` array

**Charts:**
- Uses Recharts library
- Colors are defined inline or use brand colors
- Update in the chart component props

### Adding New Graphics

1. Create a new component in `components/Marketing/` if reusable
2. Or add inline in `pages/Marketing/Landing.tsx` if section-specific
3. Use Tailwind classes for styling
4. Ensure responsive with mobile breakpoints

## Case Studies

### Adding/Editing Case Studies

1. Open `pages/Marketing/Landing.tsx`
2. Find the `caseStudies` array (around line 20)
3. Each case study has:
   - `name`: Person's name
   - `title`: Their job title
   - `quote`: Testimonial quote
   - `metrics`: Array of metric objects with `label` and `desc`
   - `avatar`: Initials for avatar

4. Add a new case study by adding an object to the array
5. The carousel will automatically include it

## Buttons

### Button Variants

Buttons use the `Button` component from `components/ui/Button.tsx`:

- `variant="gradient"`: Primary CTA (blue gradient)
- `variant="secondary"`: Secondary action (white background)
- `variant="outline"`: Outlined button
- `variant="ghost"`: Minimal button

### Updating Button Styles

1. Open `components/ui/Button.tsx`
2. Update the `variants` object to change styles
3. All buttons using that variant will update

## Testing Changes

### Before Deploying

1. **Test on mobile**: Use DevTools device emulation
2. **Test all sections**: Scroll through entire page
3. **Test interactions**: Click buttons, navigate carousel
4. **Check colors**: Ensure brand colors are consistent
5. **Check fonts**: Verify display font is applied to headings
6. **Check images**: Ensure all images load properly
7. **Test forms**: Fill out demo request form

### Common Issues

- **Colors not updating**: Clear browser cache, check Tailwind config
- **Fonts not loading**: Check Google Fonts link is correct
- **Layout breaking**: Check responsive classes are correct
- **Buttons not showing**: Check z-index, ensure proper positioning

## File Structure

```
keido/
├── index.html              # Tailwind config, fonts, global styles
├── App.tsx                  # Navigation, routing, logo
├── pages/
│   └── Marketing/
│       └── Landing.tsx      # Main landing page content
├── components/
│   ├── ui/
│   │   └── Button.tsx      # Button component
│   └── Marketing/
│       ├── HeroWorkflowAnimation.tsx
│       └── WorkflowComponents.tsx
└── DESIGN_CHANGES.md       # This file
```

## Quick Reference

### Color Classes
- `bg-brand-500`: Primary blue background
- `text-brand-600`: Primary blue text
- `border-brand-500`: Primary blue border

### Typography Classes
- `font-display`: Cabinet Grotesk (headings)
- `font-sans`: Inter (body text)
- `font-bold`: Bold weight
- `font-semibold`: Semi-bold weight

### Spacing
- `py-16 md:py-24`: Section vertical padding
- `px-4 sm:px-6`: Container horizontal padding
- `gap-4 md:gap-8`: Gap between elements

### Responsive Breakpoints
- `sm:`: 640px and up
- `md:`: 768px and up
- `lg:`: 1024px and up

## Need Help?

If you're stuck:
1. Check this documentation first
2. Look at similar sections in the code for examples
3. Test changes in small increments
4. Use browser DevTools to inspect elements

