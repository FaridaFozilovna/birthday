import { useState } from 'react';
import List from './components/List';
import  data from './data.js'
import './App.css';

function App() {
  const [people, setPeople]=useState(data);
  const deletePeople =()=>{
    setPeople([]);
  }
  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthday today</h3>
    <List  people={people}/>
    <button onClick={deletePeople} >clear-all</button>
      </section>
    </main>
  );
}

export default App;
