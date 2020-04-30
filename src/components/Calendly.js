import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import '../assets/styles/components/Calendly.css';

const Calendly = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const script = document.createElement('script');
    script.async= true;
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    document.body.appendChild(script);
    script.onload = ()=>{setLoading(false)}

    return function cleanup() {
      const node = script.parentNode;
      node.removeChild(script);
    };
  });

  if (loading) {
    return <Loader />;
  }

  return (
    <div
      className='calendly-inline-widget'
      data-url='https://calendly.com/epets/consulta-epets?background_color=ffffff&text_color=423378&primary_color=30e3cb'
    />
  );
};

export default Calendly;
