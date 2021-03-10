import React from 'react'


type OwnProps = {

}

export const LeftArrow: React.FC<OwnProps> = () => {
  return (
    <svg
      width='34'
      height='30'
      viewBox='0 0 34 30'
      fill='none'
    >
      <path
        d='M15.125 2L2 15.125L15.125 28.25'
        stroke='#93F8FF'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M2 15.125H32'
        stroke='#93F8FF'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}