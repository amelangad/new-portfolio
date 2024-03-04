import React from 'react'
import Ability from '../components/Ability'

export default function Skills() {

  return (
    <div
      id="skills"
      className="w-full h-auto bg-transparent flex flex-col px-[10%] relative overflow-hidden pb-5">
      <div className="hidden lg:flex h-full w-1/3 absolute top-0 right-0 bg-pink rounded-tl-full z-40"></div>
      <h1 className="w-full text-2xl uppercase text-center py-20">Skills</h1>
      <Ability name="HTML" delay="300ms"/>
      <Ability name="CSS, SCSS" delay="600ms" />
      <Ability name="Tailwind, BEM, Bootstrap"delay="900ms" />
      <Ability name="Vanilla Javascript" delay="1200ms" />
      <Ability name="React" delay="1500ms"/>
      <Ability name="Next" delay="1800ms"/>
      <Ability name="MongoDB" delay="300ms"/>
      <Ability name="Git" delay="700ms"/>
      <Ability name="English B2 level" delay="2000ms" />
      <Ability name="base of node/express" delay="1800ms"/>
      <Ability name="base of PHP and MySQL" delay="1500ms"/>
      <Ability name="self-motivated"delay="1200ms"/>
      <Ability name="creative, open mind" delay="900ms"/>
      <Ability name="ability to work in a team or independently" delay="600ms"/>
      <Ability name="alytical thinking" delay="300ms"/>
   
    </div>
  )
}
