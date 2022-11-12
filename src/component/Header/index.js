import React from 'react'
import { Link } from 'react-router-dom'

export default function index() {
  return (
    <div className='flex justify-between mx-10 mt-5'>
      <Link to='/'><p className='font-bold text-sm'>STEVEN.</p></Link>
      <div className='underline flex gap-3 text-xs font-medium'>
        <Link to='/'>Project</Link>
        <Link to='/About'>About me</Link>
      </div>
    </div>
  )
}
