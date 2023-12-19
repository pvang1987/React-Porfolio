import CryptoZ0ne from '../assets/CryptoZ0ne.png'
import DineNDash from '../assets/Dine-n-Dash.png'
import RxSureScribe from '../assets/Rx-SureScribe.png'
import WeatherDash from '../assets/WeatherDashboard.png'
import WorkDaySch from '../assets/WorkDayScheduler.png'
import PWA from '../assets/PWA-Text-Editor.png'
import EmployeeTracker from '../assets/Employee-Tracker.png'



const Projects = () => {
    return (
        <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#052e16]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col jusitfy-center w-full h-full'>
                <div className='pb-8'> 
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-yellow-600'>Projects</p>
                    <p className='py-6'>Below are some of my recent projects.</p>
                </div>
                { /* Grid Item */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/* Container */}
                    <div style={{backgroundImage: `url(${CryptoZ0ne})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effect */}
                        <div className='opacity-0 group-hover:opacity-100 text-center'>
                            <span>
                                CryptoZ0ne
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://devjake99.github.io/Crypto-Z0ne/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo</button>
                                    </a>
                                    <a href="https://github.com/DevJake99/Crypto-Z0ne">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code</button>
                                    </a>
                            </div>
                        </div>
                    </div>
                    <div style={{backgroundImage: `url(${DineNDash})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effect */}
                        <div className='opacity-0 group-hover:opacity-100 text-center'>
                            <span>
                                Dine &apos;n Dash
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://dinendash-66e7246af15f.herokuapp.com/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Demo</button>
                                </a>
                                <a href="https://github.com/MatthewChappelle/Dine_In_Dash/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{backgroundImage: `url(${RxSureScribe})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effect */}
                        <div className='opacity-0 group-hover:opacity-100 text-center'>
                            <span>
                                Rx SureScribe
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://rx-surescribe-9b9c8ee84e73.herokuapp.com/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo</button>
                                    </a>
                                    <a href="https://github.com/DevJake99/RX-SureScribe">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code</button>
                                    </a>
                            </div>
                        </div>
                    </div>
                    <div style={{backgroundImage: `url(${WeatherDash})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effect */}
                        <div className='opacity-0 group-hover:opacity-100 text-center'>
                            <span>
                                Weather Dashboard
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://pvang1987.github.io/Weather-Dashboard/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Demo</button>
                                </a>
                                <a href="https://github.com/pvang1987/Weather-Dashboard">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{backgroundImage: `url(${WorkDaySch})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effect */}
                        <div className='opacity-0 group-hover:opacity-100 text-center'>
                            <span>
                                Work Day Scheduler
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://pvang1987.github.io/Work-Day-Scheduler/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Demo</button>
                                </a>
                                <a href="https://github.com/pvang1987/Work-Day-Scheduler">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{backgroundImage: `url(${PWA})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effect */}
                        <div className='opacity-0 group-hover:opacity-100 text-center'>
                            <span>
                                Progressive Web Application - Text Editor
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://pa-pwa-text-editor-001e61f3ecce.herokuapp.com/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo</button>
                                    </a>
                                    <a href="https://github.com/pvang1987/PWA-Text-Editor">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code</button>
                                    </a>
                            </div>
                        </div>
                    </div>
                    <div style={{backgroundImage: `url(${EmployeeTracker})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effect */}
                        <div className='opacity-0 group-hover:opacity-100 text-center'>
                            <span>
                                Employee Tracker
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://watch.screencastify.com/v/u9RSRF1pbujj5WxBgkqo">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Demo</button>
                                </a>
                                <a href="https://github.com/pvang1987/Employee-Tracker">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects