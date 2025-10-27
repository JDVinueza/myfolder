import './App.css'

function App() {

  return (
    <>
      <main className='rounded-xl h-[80vh] mx-[10vh] my-[10vh] shadow-2xl bg-blue-400'>
        <section className='grid grid-cols-3'>
          <div id='sideBar' className='rounded-md h-[73vh] m-5 bg-blue-300'>
            <section className='grid grid-cols-1 gap-4'>

            </section>
          </div>
          <div id='content' className='rounded-md col-span-2 h-[73vh] m-5 bg-blue-300'>

          </div>
        </section>
      </main>
    </>
  )
}

export default App
