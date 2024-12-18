import React from 'react';
import SnakeGame from '../components/Game/SnakeGame';
import WelcomeSection from '../components/Home/WelcomeSection';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-8 min-h-[calc(100vh-116px)]">
      <WelcomeSection
        name="Ahmet Deger"
        role="Software Development Engineer"
        githubUrl="https://github.com/degerahmet/ahmetdeger.dev"
      />
      <SnakeGame />
    </div>
  );
};

export default Home;