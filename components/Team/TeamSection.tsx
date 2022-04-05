import React from 'react'
import Container from '../Container';
import Heading from '../Heading';

type Member = {
  name: string,
  role: string,
  twitter: string,
  image:string
}

const memberList:Member[] = [
  {name:'Name1',role:'Founder',twitter:'username',image:''},
  {name:'Name2',role:'Developer',twitter:'username',image:''},
  {name:'Name3',role:'Marketing',twitter:'username',image:''},
]

const MemberCard = ({member}) => (
    <div className='p-8 text-center'>
      {member.image ? (
        <img src={member.image} alt={member.name} />

      ):
      (
        <div className='h-24 w-24 bg-gray-300 rounded-full'>

        </div>
      )}
      <h6 className='text-2xl font-display font-m mt-4'>{member.name}</h6>
      <p className=''>{member.role}</p>

    </div>
  )


const TeamSection = () => {
  return (
    <section id='team' className=' my-16'>
        <Heading text='Meet the team'/>
    </section>
  )
};

export default TeamSection;