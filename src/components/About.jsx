// import Logo from '../assets/Pa-Logo-2.png';
import avatar from '../assets/avatar.jpg';

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#052e16] text-gray-300'>
            <div className='flex flex-col justify-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-yellow-600'>About Me</p>
                    </div>
                    <div></div>
                    </div>
                    <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                        <div>
                            <p className='sm:text-right text-4xl font-bold'><i>“The cost of procrasination is the life you could have lived.” -Some girl on the internet</i></p>
                            {/* <p className='sm:text-right text-4xl font-bold'><img src={Logo} alt="logo" style={{width: '250px'}} /></p> */}
                            <p className="sm:text-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div>
                        <img src={avatar} alt="logo" style={{width: '250px'}} />
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default About