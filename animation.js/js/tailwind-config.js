tailwind.config = {
  theme: {
    extend: {
      keyframes: {
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        // La animación dura 1 segundo, con aceleración suave y permanece al final
        'slide-left': 'slideInLeft 1s ease-out forwards',
        
        // Opcional: una animación con retraso para el contenido
        'slide-left-delay-1': 'slideInLeft 1s ease-out 0.5s forwards', 
        'slide-left-delay-2': 'slideInLeft 1s ease-out 1s forwards',
      }
    }
  }
}