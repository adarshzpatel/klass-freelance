import React from 'react'

type Props = {
  children:React.ReactNode;
}

const Container = (props: Props) => {
  return (
    <div className='container mx-auto max-w-screen-xl p-4 lg:p-8'>{props.children}</div>
  )
}

export default Container