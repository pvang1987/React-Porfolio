const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#052e16]'>
            {/* container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-[#ccd6f6]'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-yellow-600'>Pa Vang.</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I&apos;m a Full Stack Developer.</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                {/* <div><a href='/projects'>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-600 hover:border-yellow-600 rounded-3xl'>View Work 
                        <span className='group-hover:rotate-90 duration-300'>
                        </span>
                    </button>
                    </a>
                </div> */}
            </div>
        </div>
    )
}

export default Home