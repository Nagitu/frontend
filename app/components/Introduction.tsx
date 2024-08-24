'use client'

import Link from "next/link"

const Introduction = () => {
    return (
        <div
            className="p-0 md:p-6 mx-10 h-70 flex flex-col gap-2 md:gap-0 md:flex-row items-center justify-center ">
            <div className='w-full md:w-1/2'>
                <h1
                    className="text-lg md:text-4xl font-bold bg-gradient-to-r from-green-700 to-blue-800 bg-clip-text text-transparent">
                    Hi, I&apos;m Deni, a unique individual with a passion for learning and a strong
                    ability to thrive in teamwork
                </h1>
            </div>
            <div className='w-full md:w-1/2 flex items-center gap-5 justify-center'>
            <Link href="/cv.pdf" passHref>
      <a download>
        <button className='border bg-blue-500 hover:bg-blue-700 p-2 text-[10px] md:text-sm rounded-full text-white'>
          Download CV
        </button>
      </a>
    </Link>
            </div>

        </div>
    )
}

export default Introduction