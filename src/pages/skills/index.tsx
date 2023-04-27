import React from 'react'
import JDListing from '../../components/skills/jdlisting'
import StackListing from '../../components/skills/stacklisting'

const Skills = () => {
  return (
    <section id="skills" className="flex justify-between py-10">
        <JDListing/>
        <StackListing/>
    </section>
  )
}

export default Skills