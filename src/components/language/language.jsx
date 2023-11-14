import React from 'react'
import FirstLanguage from './1language'
import SecondLanguage from './2language'
import ThirdLanguage from './3language'

export default function Language() {
  return (
    <div className='flex flex-col gap-20 pb-24'>
        <FirstLanguage />
        <SecondLanguage />
        <ThirdLanguage />
    </div>
  )
}
