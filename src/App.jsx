import React from 'react'
import CourseCard from './components/CourseCard.jsx'
import imgCourse from './assets/aws.jpg'
import imgIcpCourse from './assets/icp.jpg'
import imgPythonCourse from './assets/python.jpg'
import pinkiInstructor from './assets/pinki-Instructor.jpeg'






function App() {
  return (
    
    <div className='flex justify-around items-center flex-wrap'>
     
      <CourseCard courseImg={imgCourse}  
      title="AWS and DevOps For Beginners"  
      discription="Learn AWS and DevOps from Scratch and Kickstart your career in and DevOps" 
      date="Starting from 9th June 2025" 
      time="6:00 PM - 7:00 PM" 
      imgInstructor={pinkiInstructor}
      instructorName="Vaibhavi Hole" 
      price='₹ 2999/-'
      />

      <div className='flex justify-around items-center flex-wrap'>
      <CourseCard courseImg={imgCourse}  
      title="Python Programming"  
      discription="Learn Python Programming from Scratch and Master the concepts of Python Programming" 
      date="Starting from 9th June 2025" 
      time="7:00 PM - 8:00 PM" 
      imgInstructor={pinkiInstructor}
      instructorName="Vaibhavi Hole" 
      price='₹ 999/-'
      />
      
    </div>
      
    </div>

    
  )
}

export default App
