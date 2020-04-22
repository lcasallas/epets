import React, { useEffect } from 'react';
import '../assets/styles/components/Calendly.css';

const Calendly = () => {
  useEffect(() => {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      document.body.appendChild(script);

    return function cleanup() {
      const node = script.parentNode;
      node.removeChild(script);
    };
  });

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/epets/consulta-epets?background_color=ffffff&text_color=423378&primary_color=30e3cb"
    />
  );
};

export default Calendly;