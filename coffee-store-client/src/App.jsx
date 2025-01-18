
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCards from './components/CoffeeCards';
import { useState } from 'react';

function App() {

  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
   <div className='m-20'>
      <h1 className='text-6xl text-center text-orange-600 my-20'>Coffee service: {coffees.length}</h1>
      <div className='grid md:grid-cols-2 gap-4'>
      {
        coffees.map(coffee => <CoffeeCards
        key={coffee._id}
        coffee={coffee}
        coffees={coffees}
        setCoffees={setCoffees}
        ></CoffeeCards>)
      }
      </div>
    </div>
  )
}

export default App
