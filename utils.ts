@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --color-primary: #00FF00;
  --color-background: #050505;
}

@layer base {
  body {
    background-color: var(--color-background);
    color: white;
  }
  
  h1, h2, h3, h4, h5, h6 {
    @apply tracking-tighter font-bold;
  }
}

@layer components {
  .theme-border {
    @apply border border-white/10;
  }
  
  .theme-card {
    @apply bg-white/[0.02] border border-white/5 backdrop-blur-sm transition-all duration-300;
  }
  
  .theme-button-primary {
    @apply px-5 py-2 border border-primary text-primary text-xs font-bold hover:bg-primary hover:text-black transition-all uppercase tracking-widest;
  }
  
  .theme-button-solid {
    @apply bg-white text-black px-8 py-4 font-bold text-sm tracking-widest transition-all hover:opacity-90;
  }

  .theme-badge {
    @apply inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit;
  }
}
