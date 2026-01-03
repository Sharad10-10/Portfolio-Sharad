import ContactMe from '@/components/ContactMe/ContactMe'
import ExperienceSection from '@/components/ExperienceSection/ExperienceSection'
import Header from '@/components/Header/Header'
import Introduction from '@/components/Introduction/Introduction'
import ProjectSection from '@/components/ProjectSection/ProjectSection'
import SkillsSection from '@/components/SkillsSection/SkillsSection'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Header />
      <Introduction />
      <ProjectSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactMe />
    </div>
  )
}

export default Home