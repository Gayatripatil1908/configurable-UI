import React from 'react'
import ImgAws from './../assets/aws.jpg'

import { CalendarDays, AlarmClock, Laptop } from "lucide-react"

function CourseCard({courseImg, title, discription, date, time, imgInstructor, instructorName, price }) {
  return (
    <div className='w-md bg-white shadow-sm rounded-md border border-gray-200 '>
      <img className='rounded-md mb-3' src={courseImg} alt='Course' />
      <div className='p-4'>

        <div className='text-center'>
          <span className='text-xl mx-auto font-bold text-gray-600'>{title}</span>
        </div>

        <p className='mt-3 text-gray-500'>{discription}</p>

        <div className='mt-4'>
          <div className='flex items-center'>
            <CalendarDays className='w-5 h-5 mr-2' />
            <span className='text-gray-800 font-bold'>{date}</span>
          </div>
        </div>
        <div className='mt-4 flex '>
          <div className='flex items-center mr-8'>
            <AlarmClock className='w-5 h-5 mr-2' />
            <span>{time}</span>
          </div>
          <div className='bg-gray-200 rounded-4xl px-2 pb-0.5 '>
            <div className='flex  mt-2'>
              <Laptop />
              <span className='text-sm'>Online</span>
            </div>
          </div>


        </div>
        <hr className='text-gray-300 my-4'/>
        <div >
        <div className='flex items-center'>
          <img src={imgInstructor}
          alt='isntructor'
          className='w-10 h-10 rounded-full mr-2 ring-1 ring-blue-400'/>
          <div className='ml-2'>
            <span className='font-bold text-gray-500'>
            {instructorName}  
          </span>
          <p className='text-sm'>Instructor</p>
          </div>
        </div>
      </div>
      <hr className='text-gray-300 my-2'/>
      <div className='px-4  text-center font-bold text-2xl text-blue-500'>
        {price}
      </div>
      <hr className='text-gray-300 my-2'/>

      <div className='px-4  text-center'>
        <button className='bg-black text-white py-2 px-6 rounded-full cursor-pointer'>
          Know More
        </button>
      </div>


      </div>
      
      
    </div>
  )
}

export default CourseCard