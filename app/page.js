import React from 'react'
import Image from 'next/image'

import Map from './map.js'

export default function Home() {

  function getMap() {
    const sdk = require('api')('@climacell-docs/v4.0.1#gtapp32lkgosu6j');
    let map = null;
    sdk.auth('AK79SNkjUNv3vmdByZL3L2Wfvgoje1qC');
    sdk.getMapTile({
    zoom: '5',
    x: '38.5167915',
    y: '-77.2988706',
    field: 'precipitationIntensity',
    time: 'now',
    format: 'png',
    accept: 'text/plain'
    })
    .then(({ data }) => map = data)
    .catch(err => console.error(err));

    return map;
  }

  return (
    <main className="flex min-h-screen flex-col justify-between">
     <header class="text-gray-400 bg-gray-900 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="ml-3 text-xl">Gaia</span>
          </a>
          <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
            <a class="mr-5 hover:text-white">Code Repository</a>
            <a class="mr-5 hover:text-white">Documentation</a>
          </nav>
          <button class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Button
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>

        <div class="grid grid-cols-5">
        <div class="bg-grey-900 h-screen col-span-2">

            <form>   
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative">
                    <input type="text" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900  bg-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="LATTITUDE" required />
                    <input type="text" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900  bg-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="LONGITUDE" required />

                    <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Analyze Weather</button>
                </div>
            </form>

          
        </div>
        <div class="bg-grey-900 h-screen col-span-3">

        Render Map
        </div>
      </div>
</header>
    </main>
  )
}
