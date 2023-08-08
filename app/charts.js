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
  let VisabilityMax = [demo_data.timelines.daily[0].values.visibilityMax,demo_data.timelines.daily[1].values.visibilityMax,demo_data.timelines.daily[2].values.visibilityMax,demo_data.timelines.daily[3].values.visibilityMax,demo_data.timelines.daily[4].values.visibilityMax,demo_data.timelines.daily[5].values.visibilityMax]
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

  // Rain
  let rainIntensityAvg = [demo_data.timelines.daily[0].values.rainIntensityAvg,demo_data.timelines.daily[1].values.rainIntensityAvg,demo_data.timelines.daily[2].values.rainIntensityAvg,demo_data.timelines.daily[3].values.rainIntensityAvg,demo_data.timelines.daily[4].values.rainIntensityAvg,demo_data.timelines.daily[5].values.rainIntensityAvg]
  let rainIntensityMax = [demo_data.timelines.daily[0].values.rainIntensityMax,demo_data.timelines.daily[1].values.rainIntensityMax,demo_data.timelines.daily[2].values.rainIntensityMax,demo_data.timelines.daily[3].values.rainIntensityMax,demo_data.timelines.daily[4].values.rainIntensityMax,demo_data.timelines.daily[5].values.rainIntensityMax]
  let rainIntensityMin = [demo_data.timelines.daily[0].values.rainIntensityMin,demo_data.timelines.daily[1].values.rainIntensityMin,demo_data.timelines.daily[2].values.rainIntensityMin,demo_data.timelines.daily[3].values.rainIntensityMin,demo_data.timelines.daily[4].values.rainIntensityMin,demo_data.timelines.daily[5].values.rainIntensityMin]

  return (

<div className="grid grid-cols-2">
<div>
<Plot
        data={[
          {
            x: time,
            y: temperatureApparentAvg,
            name: 'Temperature',
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
          {type: 'bar', x: time, y: visibilityAvg, name: 'Visibility', marker: {color: 'blue'}},
          {type: 'scatter', mode: 'lines+markers', x: time, y: cloudCoverAvg, name: 'Cloud Cover Average', marker: {color: 'white'}},

        ]}
        layout={ {width: '50%', height: 400, title: 'Temperature & Visability', template: theme} }
      />
</div>
<div>
<Plot
        data={[
          {
            x: time,
            y: humidityAvg,
            name: 'Avg',
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'yellow'},
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
        layout={ {width: '50%', height: 400, title: 'Humidity', template: theme} }
      />
</div>
</div>
  )
}

export default Charts
