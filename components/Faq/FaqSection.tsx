import React from 'react'
import Heading from '../Heading'
import FaqItem from './FaqItem'

type Props = {}

const FaqSection = (props: Props) => {
  return (
    <section id='faq' className='min-h-screen'>
      <Heading text='Frequently Asked Questions'/>
      <div className="flex flex-col mt-16 text-2xl gap-4">
        <FaqItem/>
        <FaqItem/>
        <FaqItem/>
        <FaqItem/>
        <FaqItem/>
        <FaqItem/>
      </div>
    </section>
  )
}

export default FaqSection