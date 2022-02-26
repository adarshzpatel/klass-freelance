import React from 'react'
import Container from './Container';

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
        <div className='h-36 w-36 bg-gray-300 rounded-full'>

        </div>
      )}
      <h6 className='text-2xl text-gray-800 font-display font-bold mt-4'>{member.name}</h6>
      <p className='text-lg text-gray-600 font-medium'>{member.role}</p>

    </div>
  )


const TeamSection = () => {
  return (
    <section className=' my-16'>
      <Container>
      <h1 className='text-4xl text-gray-900 font-bold font-display mb-16 text-center'>Team behind the project</h1>
      <div className='flex flex-wrap gap-8 justify-around items-center'>
        {memberList.map((item) => (
          <MemberCard member={item} key={item.name}/>
  ))}
      </div>
      </Container>
    </section>
  )
};

export default TeamSection;