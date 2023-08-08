import React from 'react';
import Image from 'next/image'

import Main from './main.js'

export default function Home() {

  return (

    <main className="flex min-h-screen flex-col justify-between">
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <span className="ml-3 text-xl">Gaia</span>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="https://github.com/jslatt/Gaia" target="_blank" className="mr-5 hover:text-white">Code Repository</a>
          <a href="https://jslattery.notion.site/Gaia-Tomorrow-io-Hackathon-198c372c07f6418189d1b86b707beb2d?pvs=4" target="_blank" className="mr-5 hover:text-white">Documentation</a>
        </nav>
      </div>
    </header>
    
    <Main/>

  </main>

  
    
  )
}
