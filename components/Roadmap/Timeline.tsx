import React from 'react'
import LeftTimelineItem from './LeftTimelineItem'
import RightTimelineItem from './RightTimelineItem'

type Props = {}

const Timeline = (props: Props) => {
  return (
    <div className="container mx-auto w-full h-full">
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{left: '50%'}} />
          <RightTimelineItem phase={1} title="Phase 1">
          - Discord Opens after 1k members <br />
          - Team Introduction <br />
          - Community Growth <br />
          - Assigning Roles <br />
            </RightTimelineItem>
             <LeftTimelineItem phase={2} title="Phase 2">
            - Smart Contract Audit <br />
            - White Paper <br />
            - Minting begins <br />
            - Implement Rarities and attributes <br />
            - Airdrops <br />
            - Merch <br />
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