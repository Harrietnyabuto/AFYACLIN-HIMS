import Image from "next/image";
import React from 'react';
import Landingpage from '../components/landingPage';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Landing Page */}
      <Landingpage />           

            
    </div>
  );
};

export default Home;