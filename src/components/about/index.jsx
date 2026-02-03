import React from 'react'

const About = ({title = 'about', text = ''}) => {
  return (
    <>
      <h2>{title}</h2>
      <p dangerouslySetInnerHTML={{__html: text}} />
    </>
  )
}

export default About
