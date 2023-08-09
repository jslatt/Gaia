import React from 'react';
import Image from 'next/image'

const moment = require('moment');

import Main from './main.js'

export default function Home() {

  return (

    <main className="flex min-h-screen flex-col justify-between">
<div id="alert-border-1" className="flex items-center p-4 mb-4 text-blue-800 border-t-4 border-blue-300 bg-blue-50 dark:text-blue-400 dark:bg-gray-800 dark:border-blue-800" role="alert">
    <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
    </svg>
    <div className="ml-3 text-sm font-medium">
      Note: All timestamps are in UTC unless stated otherwise. <a href="https://www.timeanddate.com/worldclock/timezone/utc" target="_blank" className="font-semibold underline hover:no-underline">See UTC time clock here</a>.
    </div>
    <div className='ml-auto -mx-1.5 -my-1.5'>
      UTC: {moment().utc().format('MMMM Do YYYY, h:mm:ss a')}
    </div>
    {/*<button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700" data-dismiss-target="#alert-border-1" aria-label="Close">
      <span className="sr-only">Dismiss</span>
      <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
      </svg>
    </button>*/}
</div>
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
