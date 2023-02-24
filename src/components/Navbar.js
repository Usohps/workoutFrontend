import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <div className='fixed top-0 left-0 right-0 bg-white'>
    <header className='md:container p-3 flex item-center justify-between border shadow-sm m-auto md:p-6'>
        <div className='md:text-2xl font-extrabold'>
            <Link to="/">
                Cozy_WorkOut
            </Link>
        </div>
        <div className='border text-center'>
        <input type="text" placeholder='Search By Title' className='border p-1 pl-4 outline-none rounded md:w-[300px]' />
        </div>
    </header>
    </div>
    </>
  )
}

export default Navbar