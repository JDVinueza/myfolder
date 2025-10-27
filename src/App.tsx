import './App.css'
import { Sections } from './data/Sections'

function App() {

  return (
    <>
      <main className='rounded-xl h-[80vh] mx-[30vh] my-[10vh] shadow-2xl bg-amber-950'>
        <section className='grid grid-cols-3 gap-2 p-3'>
          <div id='sideBar' className='rounded-md h-[75vh] overflow-auto bg-amber-100'>
            <section className='h-[30vh] m-2 bg-amber-200'>

            </section>
            <section className='grid grid-cols-1'>
              {Sections.map(({ id, title, description, component }) => (
                <span className='p-3 w-auto cursor-pointer hover:bg-amber-200 bg-amber-100 '>
                  <h4 className='font-semibold'>{title}</h4>
                  <span className='text-xs italic'>{description}</span>
                </span>
              ))}
            </section>
          </div>
          <div id='content' className='rounded-md col-span-2 h-[75vh] bg-amber-100'>

          </div>
        </section>
      </main>
    </>
  )
}

export default App
