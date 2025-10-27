import { useEffect, useState } from 'react'
import './App.css'
import { Sections } from './data/Sections'

function App() {

  const [id, setID] = useState<number>(1);

  let Component: React.ComponentType = Sections.find((item) => item.id === id)?.component;
  
  return (
    <>
      <main className='rounded-xl h-[80vh] mx-[30vh] my-[10vh] shadow-2xl bg-steam-gray-800'>
        <section className='grid grid-cols-3 gap-2 p-3'>
          <div id='sideBar' className='rounded-md h-[75vh] overflow-auto bg-steam-gray-700'>
            <section className='rounded-md h-[30vh] m-2 bg-steam-gray-600'>
              <img src="" alt="profile-picture" />
            </section>
            <section className='grid grid-cols-1 text-steam-gray-100'>
              {Sections.map(({ id, title, description }) => (
                <span key={id} onClick={() => { setID(id) }} className='p-3 w-auto cursor-pointer hover:bg-steam-gray-600 bg-steam-gray-700'>
                  <h4 className='font-semibold'>{title}</h4>
                  <span className='text-xs italic'>{description.length > 30 ? description.substring(0, 40) + '...' : description}</span>
                </span>
              ))}
            </section>
          </div>
          <div id='content' className='overflow-auto text-steam-gray-100 rounded-md col-span-2 h-[75vh] bg-steam-gray-700'>
            <Component />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
