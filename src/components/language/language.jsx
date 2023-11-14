import React from 'react'
import FirstLanguage from './1language'
import SecondLanguage from './2language'
import ThirdLanguage from './3language'
import FourthLanguage from './4language'

export default function Language() {
  return (
    <div className='flex flex-col gap-20'>
        <FirstLanguage />
        <SecondLanguage />
        <ThirdLanguage />
        <FourthLanguage />
    </div>
  )
}
