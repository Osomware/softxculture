import React from 'react'
import TypewriterComponent from 'typewriter-effect'

const TypeWriter = (): JSX.Element => {
  return (
    <h1 className="font-raleway text-5xl text-white py-10">
      <TypewriterComponent
        onInit={(typewriter)=> {
          typewriter
          .typeString('Web Development')
            
          .pauseFor(1000)
          .deleteAll()
          .typeString('Mobile App Development')

          .pauseFor(1000)
          .deleteAll()
          .typeString('Desktop App Development')

          .pauseFor(1000)
          .deleteAll()
          .typeString('Introducing SoftxCulture')
            
          .pauseFor(1000)
          .deleteAll()
          .typeString('And we are Osomeware Developers.')
            
          .pauseFor(1000)
          .deleteAll()
          .typeString('Tell us your story now.')

          .start();
        }}
      />
    </h1>
  )
}

export default TypeWriter