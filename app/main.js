"use client";
import React, { useState } from 'react';
import Image from 'next/image';
const { Configuration, OpenAIApi } = require("openai");
const parse = require('html-react-parser');

export default function Main() {

    //const [image, setImage] = useState(null);
    const [lat, setLat] = useState(null);
    const [long, setLong] = useState(null);
    const [date, setDate] = useState(null);
    const [data, setData] = useState('');
    const [analysis, setAnalysis] = useState('');



    const changeLat = (event) => {
        setLat(event.target.value);
    };
    const changeLong = (event) => {
        setLong(event.target.value);
    };


    var axios = require("axios").default;

    var options = {
        method: 'GET',
        url: 'https://api.tomorrow.io/v4/weather/forecast',
        params: {
            location: lat + ',' + long,
            timesteps: '1d',
            apikey: process.env.TMRW_IO
        }
    };

    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
      });
    const openai = new OpenAIApi(configuration);

    async function askGPT(promptPass) {
        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{"role": "system", "content": "You are a helpful assistant."}, {role: "user", content: promptPass}],
          });

          console.log(completion.data.choices[0].message.content);

        setAnalysis(completion.data.choices[0].message.content);
    }

    function getWeather() {
        axios.request(options).then(function (response) {
            setData(response.data);
            let p = "Write a Marine Corps analysis with the following location and weather data. Please provide specific guidance as to how this weather can impact the Marines willingness to fight, and how the USMC can use this as an advantage against the enemy.  Provide it in the specific format: Impact of Weather on Marine's Willingness to Fight, Positive Impacts, Negative Impacts. Do not provide any other information. Split it up by each section and format the output in an HTML Div. Do not include <head> tags or <HTML> tags. \n " + JSON.stringify(response.data);
            p = p.substring(0, 8000)
            console.log(p);
            askGPT(p)
        }).catch(function (error) {
            console.error(error);
        });
    }



    return (

        <main className="flex min-h-screen bg-gray-900 flex-col justify-between">


            <div className="grid grid-cols-5">
                <div className="bg-grey-900 h-screen col-span-2">

                    <form>
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <input type="text" onChange={changeLat} className="block w-full p-4 pl-10 text-sm text-gray-900  bg-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="LATTITUDE" required />
                            <input type="text" onChange={changeLong} className="block w-full p-4 pl-10 text-sm text-gray-900  bg-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="LONGITUDE" required />

                            <a onClick={getWeather} className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Analyze</a>
                        </div>
                    </form>


                </div>
                <div className="bg-grey-900 h-screen p-4 col-span-3">
                    <div className="p-2  w-full">
                        <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                <path d="M22 4L12 14.01l-3-3"></path>
                            </svg>
                            <span className="title-font font-medium text-white">{data ? "Lat: " + JSON.stringify(data.location.lat) : "Enter a location to begin..."}{data ? ", Long: " + JSON.stringify(data.location.lon) : null}</span>
                        </div>
                    </div>
                    <h2 className="sm:text-3xl text-2xl text-white title-font font-medium text-gray-900 mt-4 mb-4">Weather Warfighting Analysis</h2>
                    <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">OpenAI GPT-3.5</span>
                    <div className='py-4'>{parse(analysis)}</div>


                </div>
            </div>

        </main>
    )
}
