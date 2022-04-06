import React from 'react'
import LeftTimelineItem from './LeftTimelineItem'
import RightTimelineItem from './RightTimelineItem'

type Props = {}

const Timeline = (props: Props) => {
  return (
    <div className="container mx-auto w-full h-full">
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div className="border-2-2 absolute border-opacity-20 border-gray-600 bg-gray-700 h-full border" style={{left: '50%'}} />
          <RightTimelineItem phase={1} title="Phase 1">
            <ul className='list-disc pl-6'>

          <li> Discord Opens after 1k members </li>
          <li> Team Introduction</li>
          <li> Community Growth </li>
          <li> Assigning Roles </li>
            </ul>
            </RightTimelineItem>
             <LeftTimelineItem phase={2} title="Phase 2">
               <ul className='list-disc pl-6'>

             <li> Smart Contract Audit </li>
             <li> White Paper </li>
             <li> Minting begins</li>
             <li> Implement Rarities and attributes </li>
             <li> Airdrops </li>
             <li> Merch </li>
               </ul>
            </LeftTimelineItem> <RightTimelineItem phase={3} title="Phase 3">
             20 % of total minting sales to charity wallet.
            </RightTimelineItem>
             <LeftTimelineItem phase={4} title="Phase 4">
              Passive Income Introduced
            </LeftTimelineItem>
             <RightTimelineItem phase={5} title="Phase 5">
             Advance Program Activated
            </RightTimelineItem>
          </div>
      </div>
  )
}

export default Timeline