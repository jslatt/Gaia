import React from 'react';
import Plot from 'react-plotly.js';

import theme from './chart_theme.json';
import demo_data from './demo_data.json';




function Charts(props) {

  let time = [demo_data.timelines.daily[0].time,demo_data.timelines.daily[1].time,demo_data.timelines.daily[2].time,demo_data.timelines.daily[3].time,demo_data.timelines.daily[4].time,demo_data.timelines.daily[5].time]
  //Temperature
  let temperatureApparentAvg = [demo_data.timelines.daily[0].values.temperatureApparentAvg,demo_data.timelines.daily[1].values.temperatureApparentAvg,demo_data.timelines.daily[2].values.temperatureApparentAvg,demo_data.timelines.daily[3].values.temperatureApparentAvg,demo_data.timelines.daily[4].values.temperatureApparentAvg,demo_data.timelines.daily[5].values.temperatureApparentAvg]
  let temperatureApparentMax = [demo_data.timelines.daily[0].values.temperatureApparentMax,demo_data.timelines.daily[1].values.temperatureApparentMax,demo_data.timelines.daily[2].values.temperatureApparentMax,demo_data.timelines.daily[3].values.temperatureApparentMax,demo_data.timelines.daily[4].values.temperatureApparentMax,demo_data.timelines.daily[5].values.temperatureApparentMax]
  let temperatureApparentMin = [demo_data.timelines.daily[0].values.temperatureApparentMin,demo_data.timelines.daily[1].values.temperatureApparentMin,demo_data.timelines.daily[2].values.temperatureApparentMin,demo_data.timelines.daily[3].values.temperatureApparentMin,demo_data.timelines.daily[4].values.temperatureApparentMin,demo_data.timelines.daily[5].values.temperatureApparentMin]

  //Visibility
  let visibilityAvg = [demo_data.timelines.daily[0].values.visibilityAvg,demo_data.timelines.daily[1].values.visibilityAvg,demo_data.timelines.daily[2].values.visibilityAvg,demo_data.timelines.daily[3].values.visibilityAvg,demo_data.timelines.daily[4].values.visibilityAvg,demo_data.timelines.daily[5].values.visibilityAvg]
  let visabilityMax = [demo_data.timelines.daily[0].values.visibilityMax,demo_data.timelines.daily[1].values.visibilityMax,demo_data.timelines.daily[2].values.visibilityMax,demo_data.timelines.daily[3].values.visibilityMax,demo_data.timelines.daily[4].values.visibilityMax,demo_data.timelines.daily[5].values.visibilityMax]
  let visabilityMin = [demo_data.timelines.daily[0].values.visibilityMin,demo_data.timelines.daily[1].values.visibilityMin,demo_data.timelines.daily[2].values.visibilityMin,demo_data.timelines.daily[3].values.visibilityMin,demo_data.timelines.daily[4].values.visibilityMin,demo_data.timelines.daily[5].values.visibilityMin]
  
  //Cloud Cover
  let cloudCoverAvg = [demo_data.timelines.daily[0].values.cloudCoverAvg,demo_data.timelines.daily[1].values.cloudCoverAvg,demo_data.timelines.daily[2].values.cloudCoverAvg,demo_data.timelines.daily[3].values.cloudCoverAvg,demo_data.timelines.daily[4].values.cloudCoverAvg,demo_data.timelines.daily[5].values.cloudCoverAvg]
  let cloudCoverMin = [demo_data.timelines.daily[0].values.cloudCoverMin,demo_data.timelines.daily[1].values.cloudCoverMin,demo_data.timelines.daily[2].values.cloudCoverMin,demo_data.timelines.daily[3].values.cloudCoverMin,demo_data.timelines.daily[4].values.cloudCoverMin,demo_data.timelines.daily[5].values.cloudCoverMin]
  let cloudCoverMax =  [demo_data.timelines.daily[0].values.cloudCoverMax,demo_data.timelines.daily[1].values.cloudCoverMax,demo_data.timelines.daily[2].values.cloudCoverMax,demo_data.timelines.daily[3].values.cloudCoverMax,demo_data.timelines.daily[4].values.cloudCoverMax,demo_data.timelines.daily[5].values.cloudCoverMax]

  // Humidity
  let humidityAvg = [demo_data.timelines.daily[0].values.humidityAvg,demo_data.timelines.daily[1].values.humidityAvg,demo_data.timelines.daily[2].values.humidityAvg,demo_data.timelines.daily[3].values.humidityAvg,demo_data.timelines.daily[4].values.humidityAvg,demo_data.timelines.daily[5].values.humidityAvg]
  let humidityMax = [demo_data.timelines.daily[0].values.humidityMax,demo_data.timelines.daily[1].values.humidityMax,demo_data.timelines.daily[2].values.humidityMax,demo_data.timelines.daily[3].values.humidityMax,demo_data.timelines.daily[4].values.humidityMax,demo_data.timelines.daily[5].values.humidityMax]
  let humidityMin = [demo_data.timelines.daily[0].values.humidityMin,demo_data.timelines.daily[1].values.humidityMin,demo_data.timelines.daily[2].values.humidityMin,demo_data.timelines.daily[3].values.humidityMin,demo_data.timelines.daily[4].values.humidityMin,demo_data.timelines.daily[5].values.humidityMin]


  // Wind
  let windDirectionAvg = [demo_data.timelines.daily[0].values.windDirectionAvg,demo_data.timelines.daily[1].values.windDirectionAvg,demo_data.timelines.daily[2].values.windDirectionAvg,demo_data.timelines.daily[3].values.windDirectionAvg,demo_data.timelines.daily[4].values.windDirectionAvg,demo_data.timelines.daily[5].values.windDirectionAvg]
  let windGustAvg = [demo_data.timelines.daily[0].values.windGustAvg,demo_data.timelines.daily[1].values.windGustAvg,demo_data.timelines.daily[2].values.windGustAvg,demo_data.timelines.daily[3].values.windGustAvg,demo_data.timelines.daily[4].values.windGustAvg,demo_data.timelines.daily[5].values.windGustAvg]
  let windGustMax = [demo_data.timelines.daily[0].values.windGustMax,demo_data.timelines.daily[1].values.windGustMax,demo_data.timelines.daily[2].values.windGustMax,demo_data.timelines.daily[3].values.windGustMax,demo_data.timelines.daily[4].values.windGustMax,demo_data.timelines.daily[5].values.windGustMax]
  let windGustMin = [demo_data.timelines.daily[0].values.windGustMin,demo_data.timelines.daily[1].values.windGustMin,demo_data.timelines.daily[2].values.windGustMin,demo_data.timelines.daily[3].values.windGustMin,demo_data.timelines.daily[4].values.windGustMin,demo_data.timelines.daily[5].values.windGustMin]

  // Sun rise, set
  let sunrise = [demo_data.timelines.daily[0].values.sunriseTime,demo_data.timelines.daily[1].values.sunriseTime,demo_data.timelines.daily[2].values.sunriseTime,demo_data.timelines.daily[3].values.sunriseTime,demo_data.timelines.daily[4].values.sunriseTime,demo_data.timelines.daily[5].values.sunriseTime]
  let sunset = [demo_data.timelines.daily[0].values.sunsetTime,demo_data.timelines.daily[1].values.sunsetTime,demo_data.timelines.daily[2].values.sunsetTime,demo_data.timelines.daily[3].values.sunsetTime,demo_data.timelines.daily[4].values.sunsetTime,demo_data.timelines.daily[5].values.sunsetTime]

  // Rain
  let rainIntensityAvg = [demo_data.timelines.daily[0].values.rainIntensityAvg,demo_data.timelines.daily[1].values.rainIntensityAvg,demo_data.timelines.daily[2].values.rainIntensityAvg,demo_data.timelines.daily[3].values.rainIntensityAvg,demo_data.timelines.daily[4].values.rainIntensityAvg,demo_data.timelines.daily[5].values.rainIntensityAvg]
  let rainIntensityMax = [demo_data.timelines.daily[0].values.rainIntensityMax,demo_data.timelines.daily[1].values.rainIntensityMax,demo_data.timelines.daily[2].values.rainIntensityMax,demo_data.timelines.daily[3].values.rainIntensityMax,demo_data.timelines.daily[4].values.rainIntensityMax,demo_data.timelines.daily[5].values.rainIntensityMax]
  let rainIntensityMin = [demo_data.timelines.daily[0].values.rainIntensityMin,demo_data.timelines.daily[1].values.rainIntensityMin,demo_data.timelines.daily[2].values.rainIntensityMin,demo_data.timelines.daily[3].values.rainIntensityMin,demo_data.timelines.daily[4].values.rainIntensityMin,demo_data.timelines.daily[5].values.rainIntensityMin]


  function average(array) {
    return array.reduce((x,y) => x+y)/array.length
  }

  return (
<div>
<section className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-4 mx-auto">
    <div className="flex flex-wrap -m-4 text-center">
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">2.7K</h2>
        <p className="leading-relaxed">Sunrise (Avg)</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">1.8K</h2>
        <p className="leading-relaxed">Sunset (Avg)</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">35</h2>
        <p className="leading-relaxed">??</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">{Math.round(average(windDirectionAvg))}</h2>
        <p className="leading-relaxed">Wind Direction Avg (Deg)</p>
      </div>
    </div>
  </div>
</section>
<div className="grid grid-cols-2">
<div>
<Plot
        data={[
          {
            x: time,
            y: temperatureApparentAvg,
            name: 'Avg',
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
          {
            x: time,
            y: temperatureApparentMax,
            name: 'Max',
            type: 'scatter',
            mode: 'markers',
            marker: {color: 'yellow'},
          },
          {
            x: time,
            y: temperatureApparentMin,
            name: 'Min',
            type: 'scatter',
            mode: 'markers',
            marker: {color: 'yellow'},
          },
        ]}
        layout={ {width: '50%', height: 400, title: 'Temperature (C)', template: theme} }
      />
</div>
<div>
<Plot
        data={[
          {
            x: time,
            y: windDirectionAvg,
            name: 'Direction',
            type: 'scatter',
            mode: 'markers',
            yaxis: 'y2',
            opacity: 0.5,
            marker: {
              color: 'rgb(17, 157, 255)',
              size: 10,
              line: {
                color: 'rgb(231, 99, 250)',
                width: 6
              }
            },
          },
          {
            x: time,
            y: windGustAvg,
            name: 'Avg',
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'white'},
          },
          {
            x: time,
            y: windGustMax,
            name: 'Max',
            type: 'scatter',
            mode: 'markers',
            marker: {color: 'yellow'},
          },
          {
            x: time,
            y: windGustMin,
            name: 'Min',
            type: 'scatter',
            mode: 'markers',
            marker: {color: 'yellow'},
          },
  

        ]}
        layout={ {width: '50%', height: 400, title: 'Wind Gust (m/s)', template: theme, yaxis : {title: "Y1"}, yaxis2:{ title: 'yaxis2 title',overlaying: 'y',side: 'right'}} }
      />
</div>

</div>
<div className="grid grid-cols-2">
<div>
<Plot
        data={[
          {
            x: time,
            y: cloudCoverAvg,
            name: 'Avg',
            type: 'bar',
            mode: 'lines+markers',
            marker: {color: '#ADD8E6'},
          },
          {
            x: time,
            y: cloudCoverMax,
            name: 'Max',
            type: 'scatter',
            mode: 'markers',
            marker: {color: 'yellow'},
          },
          {
            x: time,
            y: cloudCoverMin,
            name: 'Min',
            type: 'scatter',
            mode: 'markers',
            marker: {color: 'yellow'},
          },
        ]}
        layout={ {width: '50%', height: 400, title: 'Cloud Cover (%)', template: theme} }
      />
</div>

<div>
<Plot
        data={[
          {
            x: time,
            y: humidityAvg,
            name: 'Avg',
            type: 'bar',
            mode: 'lines+markers',
            marker: {color: '#c1a050'},
          },
          {
            x: time,
            y: humidityMax,
            name: 'Max',
            type: 'scatter',
            mode: 'markers',
            marker: {color: 'yellow'},
          },
          {
            x: time,
            y: humidityMin,
            name: 'Min',
            type: 'scatter',
            mode: 'markers',
            marker: {color: 'yellow'},
          },

        ]}
        layout={ {width: '50%', height: 400, title: 'Humidity (%)', template: theme} }
      />
</div>
</div>
<div className="grid grid-cols-2">
<div>
<Plot
        data={[
          {
            x: time,
            y: visibilityAvg,
            name: 'Avg',
            type: 'bar',
            mode: 'lines+markers',
            marker: {color: '#ADD8E6'},
          },
          {
            x: time,
            y: visabilityMax,
            name: 'Max',
            type: 'scatter',
            mode: 'markers',
            marker: {color: 'yellow'},
          },
          {
            x: time,
            y: visabilityMin,
            name: 'Min',
            type: 'scatter',
            mode: 'markers',
            marker: {color: 'yellow'},
          },
        ]}
        layout={ {width: '50%', height: 400, title: 'Visibility (%)', template: theme} }
      />
</div>

<div>
<Plot
        data={[
          {
            x: time,
            y: rainIntensityAvg,
            name: 'Avg',
            type: 'bar',
            mode: 'lines+markers',
            marker: {color: '#C3B1E1'},
          },
          {
            x: time,
            y: rainIntensityMax,
            name: 'Max',
            type: 'scatter',
            mode: 'markers',
            marker: {color: 'yellow'},
          },
          {
            x: time,
            y: rainIntensityMin,
            name: 'Min',
            type: 'scatter',
            mode: 'markers',
            marker: {color: 'yellow'},
          },

        ]}
        layout={ {width: '50%', height: 400, title: 'Rain Intensity', template: theme} }
      />
</div>
</div>
</div>
  )
}

export default Charts
