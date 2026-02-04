DOCTYPE
<! html>
<html lang="pt-br" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>FS Serviços - Telecomunicações</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,700;1,700&family=Baskervville:ital@0;1&display=swap" rel="stylesheet">
    <script>
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              gold: {
                DEFAULT: '#d4af37',
                light: '#f1d592',
                dark: '#b8860b',
              },
              'fs-dark': '#050505',
              'fs-card': '#111111',
              'brand-brown': '#3d2b1f',
            },
            fontFamily: {
              sans: ['Montserrat', 'sans-serif'],
              display: ['Playfair Display', 'serif'],
              serif: ['Baskervville', 'serif'],
            },
            animation: {
              'fade-in': 'fadeIn 1s ease-out forwards',
              'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
              fadeIn: {
                '0%': { opacity: '0', transform: 'translateY(20px)' },
                '100%': { opacity: '1', transform: 'translateY(0)' },
              },
              float: {
                '0%, 100%': { transform: 'translateY(0)' },
                '50%': { transform: 'translateY(-20px)' },
              }
            }
          }
        }
      }
    </script>
    <style>
      .gold-gradient {
        background: linear-gradient(135deg, #b8860b 0%, #d4af37 50%, #f1d592 100%);
      }
      .gold-text-gradient {
        background: linear-gradient(135deg, #b8860b 0%, #d4af37 50%, #f1d592 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .glass-card {
        background: rgba(255, 255, 255, 0.03);
        backdrop-filter: blur(12px);
        border: 1px solid rgba(212, 175, 55, 0.1);
      }
      ::-webkit-scrollbar {
        width: 8px;
      }
      ::-webkit-scrollbar-track {
        background: #050505;
      }
      ::-webkit-scrollbar-thumb {
        background: #d4af37;
        border-radius: 10px;
      }
    </style>
  <script type="importmap">
{
  "imports": {
    "react/": "https://esm.sh/react@^19.2.4/",
    "react": "https://esm.sh/react@^19.2.4",
    "react-dom/": "https://esm.sh/react-dom@^19.2.4/",
    "lucide-react": "https://esm.sh/lucide-react@^0.563.0",
    "@google/genai": "https://esm.sh/@google/genai@^1.39.0"
  }
}
</script>
</head>
  <body class="bg-fs-dark text-white font-sans overflow-x-hidden">
    <div id="root"></div>
  </body>
</html>
