const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-[#052e16] flex justify-center items-center p-4'>
            <form method='POST' action="https://getform.io/f/f33374e8-9d64-4487-9d73-3059b2bdc154" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-yellow-600 text-gray-300'>Contact</p>
                    <p className='text-gray-300 py-4'>Full out the form below or send me an email.</p>
                </div>
                <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
                <textarea className='bg-[#ccd6f6] p-2' name="message" id="" cols="30" rows="10" placeholder='Message'></textarea>
                <button className='text-white border-2 hover:bg-yellow-600 hover:border-yellow-600 px-4 py-3 my-8 mx-auto flex items-center rounded-3xl'>Let&apos;s Collaborate</button>
            </form>
        </div>
    )
}

export default Contact