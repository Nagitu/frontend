'use client'
import Image from 'next/image'
const FindMe = () => {
  return (
    <>
    <div
    className=" text-gray-600 bg-white dark:text-white dark:bg-blue-900 p-0 md:p-6 mx-8 rounded-lg flex flex-col gap-5 md:flex-row justify-between items-center">
    <div className="flex items-center w-full md:w-3/4">
        <div className="border-4 border-green-500 rounded-full p-1">
            <Image
                src="/avatar.jpeg"
                width={120}
                height={120}
                alt="Avatar"
                className="rounded-full"/>
        </div>
        <div className="ml-4 w-3/4">
            <h2 className="md:text-2xl dark:text-white font-bold">Biography</h2>
            <p className='text-md'>
                Getting Buff +1 for learning, Buff +2 for documentation, and more buff on
                managing the team. Excited about building robust web applications with
                <span className="text-blue-400">Node.js</span>
                and crafting dynamic user interfaces with
                <span className="text-blue-400">React.js</span>
            </p>

        </div>
    </div>

    <div className="text-right w-full md:w-1/2 flex flex-col items-center justify-center">
        <h3 className="text-md md:text-xl font-bold">Lets connect</h3>
        <div className="mt-2 flex space-x-4">
            <a href="#">
                <Image
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram Icon"
                loading='lazy'
                height={24}
                width={24}/></a>
            <a href="#"><Image
                src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg"
                alt="Twitter Icon"
                loading='lazy'
                height={24}
                width={24}/></a>
            <a href="#"><Image
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="Facebook Icon"
                loading='lazy'
                height={24}
                width={24}/></a>
        </div>
    </div>
</div>
    </>
  )
}

export default FindMe