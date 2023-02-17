import React from 'react'

interface IProps {
  children: React.ReactNode
}

const DefaultLayout: React.FC<IProps> = ({ children }): JSX.Element => {
  return (
    <div className="flex w-full h-screen bg-midnight">
      { children }
    </div>
  )
}

export default DefaultLayout