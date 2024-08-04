
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='container max-w-4xl md:max-w-full px-0 lg:px-20 py-[89px] mt-24 transition-opacity duration-1000 ease-in-out bg-black'>
      <div className=' relative flex align-middle justify-center px-5 sm:px-6 lg:px-40'>
            <div className=' text-center space-y-16 lg:px-10'>
            <h4 className=' font-normal font-roboto text-sm mx-5 sm:mx-20 lg:mx-32 text-gray-400 dark:text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, obcaecati. Placeat a facilis doloremque ducimus, consectetur quo repellat, voluptatum perspiciatis quisquam error quos ex suscipit maiores. Veniam illum quae neque?</h4>
            <h1 className='text-2xl sm:text-5xl lg:text-6xl font-bold md:font-extrabold font-sans uppercase leading-none md:leading-[80px] text-white stroke-2 stroke-black'>Don't waste your energy</h1>
            <p className='max-w-sm sm:max-w-md lg:max-w-2xl ml-3 sm:ml-28 lg:ml-32 text-base font-medium md:font-semibold leading-[20px] sm:leading-[30px] text-gray-400 dark:text-gray-500 tracking-wider'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero neque sit inventore placeat natus molestias quidem, possimus sapiente eos accusamus, hic sunt ex explicabo necessitatibus! Adipisci iste fuga est consequatur.</p>

            <div className='flex justify-center gap-10'>
                <button type='button' className='border px-5 py-3 text-lg font-semibold font-serif rounded-md text-white'>Shop</button>
            {/* <button type='button' className='border px-5 py-3 text-lg font-semibold font-serif rounded-md text-white'>Sign up</button> */}
            <Link to='/login' className='border px-5 py-3 font-semibold font-serif rounded-md text-white text-lg'>Login</Link>
            </div>

            </div>
           

        </div>
    </div>
  )
}

export default Home
