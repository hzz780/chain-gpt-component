import React, { useState } from 'react';
import './styles.css';  // 引入Tailwind CSS
import LogoAA from './logo.svg';  // 引入SVG
import { ReactComponent as Logo } from './logo.svg';

const MyComponent: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 bg-blue-100 text-center">
      <Logo className="h-12 w-12 mx-auto mb-4" />
      {/*<img src={LogoAA.src} alt="logo"/>*/}
      <img src={LogoAA} alt="logo"/>
      <h1 className="text-xl font-bold">Hello World</h1>
      <p className="text-gray-700">You clicked {count} times</p>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => setCount(count + 1)}
      >
        Click me
      </button>
    </div>
  );
};

export default MyComponent;
