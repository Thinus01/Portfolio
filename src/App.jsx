import './App.css'
import { NavElement } from "./layouts/navElements"
import { Projects } from "./layouts/projects"
import { Button } from "./layouts/Button"
import { ProjectData } from "./data/projectData"
import { Lines } from './layouts/Lines'

function App() {

  return (
    <section className='bg-gray-950 flex flex-col text-white'>
      <nav className='grid grid-cols-4 sticky top-0 h-10 shadow-2xl shadow-gray-800'>
        <NavElement><a className='block' href="#Intro">Introduction</a></NavElement>
        <NavElement><a className='block' href="#Projects">Projects</a></NavElement>
        <NavElement><a className='block' href="#Info">Info</a></NavElement>
        <NavElement><a className='block' href="#Contact">Contact</a></NavElement>
      </nav>
      <div className='flex flex-col items-center' id='Intro'>
        <div className='text-center text-3xl flex flex-col items-center mt-48'>
          <p>Hey, welcome to my portfolio!</p>
          <p className='w-1/2 rounded-b-3xl p-10 bg-gradient-to-t from-purple-900 to-30% border-x-2 border-purple-900/40'>I am Thinus, and I will be your guide for this once in a life time experience, 
            where I will show you some crazy projects that I have made in the past, 
            just like this one. Projects that would not be the same without the help of React, Redux, 
            Bootstrap, Tailwind, TypeScript and Ruby on Rails.
          </p>
        </div>
        <Lines />
        <div className='flex flex-col items-center' id="Projects">
          {ProjectData.map(project => (
            <Projects key={project.id} {...project} />
          ))}
        </div>
        <Lines />
      </div>
      <div className='flex flex-col items-center' id='Info'>
        <div className='text-center w-1/2 text-2xl p-5 rounded-xl border-x-2 border-solid border-secondary bg-gradient-to-t from-secondary to-10%'>
          <p>What an adventure they have been. There is no better way to describe front end web development than "The more you do, 
            the more you want to do". In my experience thus far I found Tailwind and TypeScript is a perfect match and I constintly find myself returning to those two tools. 
            Creating a clean and neat design for a webpage is a true passion of mine and it is a skill I do not mind sharing. <br />
            Have a look at my resume if you'd like to know more.
          </p>
          <Button className='my-5'><a className='block' href='https://docs.google.com/document/d/1lKxxXAu5jJwyR-IZMIiJ9XZEJ5SPioBpuBVy6dDMF50/edit?usp=sharing'  target="_blank">RESUME</a></Button>
        </div>
        <Lines />
      </div>
      <div className='flex flex-col items-center mb-10' id='Contact'>
        <div className='flex flex-col items-center rounded-xl w-1/2 border-2 border-dotted border-purple-600 p-10'>
          <div className='flex flex-col items-center text-center text-2xl p-5 rounded-xl border-x-2 border-solid border-secondary bg-gradient-to-t from-secondary to-10%'>
            <p>
              If you like what you see, feel free to contact me at any time through any of these platforms or by emailing me at thinusvdv2001@gmail.com.
            </p>
            <div className='flex gap-3 py-5'>
              <Button><a w-full h-full href="https://www.linkedin.com/in/thinusvdv/" target="_blank">LinkedIn</a></Button>
              <Button><a w-full h-full href="https://twitter.com/thinus_v_d_v" target="_blank">Twitter</a></Button>
              <Button><a w-full h-full href="https://github.com/Thinus01" target="_blank">GitHub</a></Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default App
