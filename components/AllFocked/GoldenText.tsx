import React from 'react'

type Props = {
  children: string
}

const GoldenText = ({children}: Props) => {
  return (
    <span className=' bg-clip-text bg-gradient-to-br  text-transparent from-orange-600 via-yellow-400 to-amber-500'>{children}</span>
  )
}

export default GoldenText