"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
const { Configuration, OpenAIApi } = require("openai");
const parse = require('html-react-parser');
import { Loader } from '@googlemaps/js-api-loader';
import demo_data from './demo_data.json';

//import Chart from 'react-google-charts';
import Charts from './charts.js';

export default function Main() {

    const [lat, setLat] = useState(38.5167915);
    const [long, setLong] = useState(-77.2988706);
    const [data, setData] = useState(demo_data);
    const [analysis, setAnalysis] = useState('Nothing to see here :-) Enter coordinates to begin.');
    const [map, setMap] = useState(null);

    const [rendered, setRendered] = useState(false);




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

    // OPEN AI
    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    async function askGPT(promptPass) {
        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{ "role": "system", "content": "You are a helpful assistant." }, { role: "user", content: promptPass }],
        });
        
        setAnalysis(completion.data.choices[0].message.content);
    }

    // GOOGLE MAP
    const loadMap = async () => {
        const loader = new Loader({
            apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
            libraries: ['places'],
        });
        const google = await loader.load();

        const mapOptions = {
            center: { lat: parseFloat(lat), lng: parseFloat(long) },
            zoom: 12,
        };

        setMap(new google.maps.Map(document.getElementById('map'), mapOptions));

    };

    useEffect(() => {
        loadMap();
    }, []);



    function getWeather() {

        setAnalysis('');

        axios.request(options).then(function (response) {
            setData(response.data);
            let p = "You are a squad leader for a Marine Corps infantry squad. Your task is to use this weather data to produce a report on how the weather will impact the mission. Provide specific guidance on how this weather will impact the Marines willingness to fight, and how the USMC can use this as an advantage against the enemy. Weather is analyzed using the five military aspects of weather: temperature/humidity, precipitation, wind, clouds, and visibility (day and night). How will these elements influence the operations of each combatant? To determine its cumulative effect on the operation, weather must be considered in conjunction with the associated terrain. Weather affects equipment (including electronic and optical), terrain (traffic-ability), and visibility. Inclement weather affects visibility, rates of movement, routes of movement, unit efficiency and morale, and makes command and control more difficult. Poor weather conditions can be as much of an advantage as a disadvantage to a unit, depending upon the unit’s capabilities, equipment, and training. Provide with the following headings format: Positive Impacts (h2), Negative Impacts (h2) Enemies perspective (h2). Do not provide any other information. It should be at least 500 words. Split it up by each section and format the output in a HTML Div. Answer with bullet points and formatted headers. Do not include <head> tags or <HTML> tags. Give <h2> the following classes: sm:text-3xl text-2xl text-white title-font font-medium text-gray-900 mt-4 mb-4. Give the <ul> the classes: space-y-2 list-disc list-inside.  \n " + JSON.stringify(response.data);
            p = p.substring(0, 8000)
            askGPT(p)
            setRendered(true);
        }).catch(function (error) {
            console.error(error);
        });

        const map = setMap(new google.maps.Map(document.getElementById('map'), {
            center: { lat: parseFloat(lat), lng: parseFloat(long) },
            zoom: 12,
        }));
    }

    const spinner = `
    <center>
    <div role="status">
    <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span className="sr-only">Loading...</span>
    </div>
    </center>
`

    return (

        <main className="flex min-h-screen bg-gray-900 flex-col justify-between">


            <div className="grid grid-cols-5">
                <div className="bg-grey-900 col-span-2">

<div className=" border-b border-gray-200 dark:border-gray-700">
    <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" >
        <li className="mr-2" role="presentation">
            <button onClick={() => {setLat(21.8988072); setLong(11.470691)}} className="inline-block p-4 border-b-2 text-gray-300 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"  type="button" >Sahara Desert</button>
        </li>
        <li className="mr-2" role="presentation">
            <button onClick={() => {setLat(-71.3089937); setLong(0)}} className="inline-block p-4 border-b-2 text-gray-300 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"  type="button" >Antarctica</button>
        </li>
        <li className="mr-2" role="presentation">
            <button onClick={() => {setLat(31.6350798); setLong(65.6677686)}} className="inline-block p-4 border-b-2 text-gray-300 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"  type="button" >Kandahar</button>
        </li>
        <li className="mr-2" role="presentation">
            <button onClick={() => {setLat(21.9916367); setLong(117.5383658)}} className="inline-block p-4 border-b-2 text-gray-300 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"  type="button" >Kaohsiung</button>
        </li>

    </ul>

</div>

                    <form>
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <input type="number" id="lat" onChange={changeLat} className="block w-full p-4 pl-10 text-sm text-gray-900  bg-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="LATTITUDE" required />
                            <input type="number" id="long" onChange={changeLong} className="block w-full p-4 pl-10 text-sm text-gray-900  bg-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="LONGITUDE" required />

                            <a onClick={getWeather} className="cursor-pointer text-white absolute right-2.5 bottom-2.5 bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">Analyze</a>
                        </div>
                    </form>

                    <div>
                        <div id="map" style={{ height: '500px' }}></div>
                    </div>
                </div>
                <div className="bg-grey-900 p-4 col-span-3">
                    <div className="p-2  w-full">
                        <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                <path d="M22 4L12 14.01l-3-3"></path>
                            </svg>
                            <span className="title-font font-medium text-white">{data ? "Lat: " + JSON.stringify(lat) : "Enter a location to begin..."}{data ? ", Long: " + JSON.stringify(long) : null}</span>
                        </div>
                    </div>
                    <h2 className="sm:text-3xl text-2xl text-white title-font font-medium text-gray-900 mt-4 mb-4">Weather Warfighting Analysis</h2>
                    <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">Model: GPT-3.5</span>
                    <div className='py-4 overflow-auto' style={{ height: '425px' }}>
                        {analysis ? parse(analysis) : parse(spinner)}
                    </div>
                </div>
            </div>
            
            <Charts weatherData={data} rendered={rendered} />
        </main>
    )
}
