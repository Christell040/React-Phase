// App.tsx
import React from 'react';
import './App.css';
import ProfileCard from './components/ProfileCard';

// Define user profile data
const userProfile = {
  name: 'Gojo Satoru',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  website: 'https://example.com'
};

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>User Profile Card</h1>
        <ProfileCard user={userProfile} />
      </header>
    </div>
  );
}

export default App;
