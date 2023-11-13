import React from 'react'
import FirstServices from './1services'
import SecondServices from './2services'
import ThirdServices from './3services'

export default function Services() {
  return (
    <div className="flex flex-col gap-20 pb-24">
        <FirstServices />
        <SecondServices />
        <ThirdServices />
    </div>
  )
}
