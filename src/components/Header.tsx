import Link from 'next/link'
import React from 'react'

 export default function Header() {
  return (
    <div>
  <ul className='flex justify-center gap-4 bg-lime-700'>
    <li> <Link href="/">Home</Link></li>
    <li><Link href="/about">About</Link></li>
    <li><Link href="/skills">Skills</Link></li>
    <li><Link href="/contect">Contect </Link></li>
  </ul>
    </div>
  )
}


