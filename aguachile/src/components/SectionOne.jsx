import React from 'react'
import ContainerBottom from './SectionOneComp/ContainerBottom'
import ContainerTop from './SectionOneComp/ContainerTop'

const SectionOne = () => {
  return (
    <section className='main-container-nav'>
        <ContainerTop />
        <ContainerBottom />
    </section>
  )
}

export default SectionOne