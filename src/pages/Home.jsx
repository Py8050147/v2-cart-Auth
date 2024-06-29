import React from 'react'

function Home() {
  return (
    <div className='container max-w-4xl md:max-w-full px-20 py-[89px] mt-24 transition-opacity duration-1000 ease-in-out bg-black'>
      <div className=' relative flex align-middle justify-center px-40'>
            <div className=' text-center space-y-16 px-10'>
            <h4 className=' font-normal text-sm mx-32 text-gray-400 dark:text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, obcaecati. Placeat a facilis doloremque ducimus, consectetur quo repellat, voluptatum perspiciatis quisquam error quos ex suscipit maiores. Veniam illum quae neque?</h4>
            <h1 className='text-6xl font-extrabold font-sans uppercase leading-[80px] text-white stroke-2 stroke-gray-900'>Don't waste your energy</h1>
            <p className=' text-base font-medium font-semibold leading-[30px] text-gray-400 dark:text-gray-500 tracking-wider'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero neque sit inventore placeat natus molestias quidem, possimus sapiente eos accusamus, hic sunt ex explicabo necessitatibus! Adipisci iste fuga est consequatur.</p>

            <div className='flex justify-center gap-10'>
                <button type='button' className='border px-5 py-3 text-lg font-semibold font-serif rounded-md text-white'>Shop</button>
                <button type='button' className='border px-5 py-3 text-lg font-semibold font-serif rounded-md text-white'>Sign up</button>
            </div>

            </div>
           

        </div>
    </div>
  )
}

export default Home
