import { useEffect, useState } from 'react'
import './App.css'
import { Sections } from './data/Sections'

function App() {

  const [id, setID] = useState<number>(1);

  let Component: React.ComponentType = Sections.find((item) => item.id === id)?.component;

  return (
    <>
      <main className='text-shadow-lg rounded-xl h-[80vh] mx-[20vh] my-[10vh] shadow-xl/30 bg-steam-gray-800'>
        <section className='grid grid-cols-3 gap-2 p-1'>
          <div id='sideBar' className='h-[78vh] overflow-auto bg-steam-gray-700'>
            <div className="flex items-center gap-4 p-8 sticky top-0 bg-steam-gray-700 shadow-2xl">
              <img className="w-30 h-30 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="" />
              <div className="font-medium dark:text-white">
                <div>José David Gómez Vinueza</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Análista y desarrollador de software</div>
              </div>
            </div>
            <section className='grid grid-cols-1 text-steam-gray-100'>
              {Sections.map(({ id, title, description }) => (
                <span key={id} onClick={() => { setID(id) }} className='animate-slideInLeft p-3 w-auto cursor-pointer hover:bg-steam-gray-600 bg-steam-gray-700 border-l-4 border-solid border-steam-gray-500'>
                  <h4 className='font-semibold'>{title}</h4>
                  <span className='text-xs italic'>{description.length > 30 ? description.substring(0, 40) + '...' : description}</span>
                </span>
              ))}
            </section>
          </div>
          <div id='content' className='overflow-auto text-steam-gray-100 col-span-2 h-[78vh] bg-steam-gray-700'>
            <Component />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
