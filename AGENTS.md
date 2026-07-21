# Project Guidelines & Performance Standards

## Mobile & Network Performance Rules
1. **Vite Optimization (`vite.config.ts`)**:
   Always include `optimizeDeps` pre-bundling for heavy or multi-submodule libraries like `lucide-react`, `motion/react`, and `gsap`:
   ```ts
   optimizeDeps: {
     include: ['lucide-react', 'motion/react', 'gsap']
   }
   ```

2. **Image Lazy Loading (`loading="lazy"`)**:
   Every `<img>` tag placed below the fold (above-the-fold excluded) must have the `loading="lazy"` attribute to prevent request waterfalls on mobile devices.

3. **Static Assets in `/public`**:
   Static assets (e.g., `logo.jpg`, `dobra1.png`, `maquina.png`) must be maintained in the `/public/` directory at the project root so Vite serves them cleanly without 404 errors.
