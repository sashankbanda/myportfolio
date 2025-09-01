import { useEffect } from 'react';
const GlobalStyles = () => {
  useEffect(() => {
    const customStyles = `
      @keyframes fade-in {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }

      .animate-fade-in {
        animation: fade-in 0.8s ease-out forwards;
        opacity: 0;
      }

      .delay-200 { animation-delay: 0.2s; }

      @keyframes pulse-neon {
        0%, 100% { box-shadow: 0 0 5px #f472b6, 0 0 10px #f472b6; }
        50% { box-shadow: 0 0 10px #f472b6, 0 0 20px #f472b6; }
      }
      .animate-pulse-neon {
        animation: pulse-neon 2s infinite;
      }
      
      .card-glow {
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.2);
      }

      .social-link {
        transition: transform 0.3s ease-in-out;
      }
      .social-link:hover {
        transform: scale(1.1);
      }
    `;
    const style = document.createElement('style');
    style.innerHTML = customStyles;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  return null;
};
export default GlobalStyles;