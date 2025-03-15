import { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import { MovieTab } from './components/MovieTab';
import { UserCard } from './components/UserCard';


function App() {
  const [count, setCount] = useState(0);

  const exampleVideo = {
    title: 'Super film',
    description: 'Opis filmu',
    url: 'https://example.com'
  };

  const exampleUser = {
    name: 'Jan Kowalski',
    age: 30,
    email: 'susok@com.pl'
  };

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <UserTabWrapper>
        <UserCard {...exampleUser}/>
      </UserTabWrapper>
      <MovieTabWrapper>
          <MovieTab video={exampleVideo} />
      </MovieTabWrapper>
      <MovieTab video={exampleVideo} />
      <MovieTab video={exampleVideo} />
    </>
  )
}

export default App

const MovieTabWrapper = styled.div`
  padding: 20px;
  background-color:rgb(0, 0, 0);
  color: white;
  border-radius: 12px;
  text-align: center;
`;

const UserTabWrapper = styled.div`
  padding: 20px;
  background-color:rgb(164, 0, 0);
  color: white;
  border-radius: 12px;
  text-align: center;
`;



