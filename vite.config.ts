import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  
   base: '/CourseCard/',
  plugins: [
    tailwindcss(),
  ],
})