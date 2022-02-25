import React from 'react'
import Countdown, { zeroPad } from 'react-countdown'

type Props = {}

const renderer = ({hours,minutes,seconds,completed}) => {
  if(completed){
    return "Presale Started"
  } else {
    return <span className='text-6xl font-bold'>
      {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
    </span>
  }
}

const PresaleCountdown = (props: Props) => {
  return (
    <Countdown date={Date.now() + 500000} renderer={renderer} />
  )
}

export default PresaleCountdown;