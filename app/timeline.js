import * as React from "react";
import Chart from "react-google-charts";
import axios from 'axios';

class Timeline extends React.Component {

  static defaultProps = {
      // get your key from app.tomorrow.io/development/keys
      // ideally the request will be proxied by another server-side service, keeping the key secure
      apikey: process.env.TMRW_IO,
      // pick the location, as a latlong pair array, GeoJSON geometry or predefined ID
      location: "-33.9145291,18.3264191",
      // list the insights, can also include custom insights for monitored locations
      insights: ["winter", "wind", "temperature", "floods"],
      // set the safety buffer around the location, applicable only to insight categories only
      buffer: 20
  };

  constructor(props) {
    super(props);
    this.state = { events: [] };
  };

  componentDidMount = () => {
    const props = this.props;
    const {insights, location, apikey} = props;
    // request all events matching the insights for the above-mentioned location
    axios({
      method: "post",
      // set the Events POST endpoint as the target URL
      url: `https://api.tomorrow.io/v4/events?apikey=${apikey}`,
      data: {
        location,
        insights,
      },
    })
      .then((response) => {
        console.log(response);
        this.setState({events: response.data.data.events})
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // build a table of the eventValues to be shown on hover
  renderTooltip = (eventValues) => {
    return `<table style="width:50px">${Object.keys(eventValues).map((key) =>
      typeof eventValues[key] == "object"
        ? null
        : `<tr><td><strong>${key}</strong></td><td>${eventValues[key]}</td></tr>`
    ).join("")}</table>`;
  }
  

  render() {
    // configure unique colors, per severity level
    const colors = {
      "unknown": "#b6c0cc",
      "minor": "#ffff42",
      "moderate": "#ff7800",
      "severe": "#eb002c",
      "extreme": "#b80d0a"
    };
    let data = [
      // set the columns of the timeline chart, whereas Name is shown next to each bar and tooltip on hover
      [
        { type: "string", id: "title" },
        { type: "string", id: "Name" },
        { type: "string", role: "style" },
        { type: "string", role: "tooltip" },
        { type: "date", id: "Start" },
        { type: "date", id: "End" },
      ],
      // map all resolved events to the array structure mentioned above, in an orderly fashion
      ...this.state.events.map((event) => [
        event.eventValues.title,
        `severity: ${event.severity}   -   certainty: ${event.certainty}   -   urgency: ${event.urgency}`,
        colors[event.severity],
        this.renderTooltip(event.eventValues),
        new Date(event.startTime),
        new Date(event.endTime),
      ]),
    ];
    return (
      <div>
        {this.state.events.length > 0 && (
          <div
            style={{
              margin: "auto",
              padding: "5% 5%",
              display: "flex",
              flex: "auto",
              flexFlow: "row wrap",
            }}
          >
            <Chart
              width={"400px"}
              height={"400px"}
              chartType="Timeline"
              loader={<div>Loading Events</div>}
              data={data}
              options={{
                tooltip: { isHtml: true },
                colors: Object.values(colors),
              }}
              rootProps={{ "data-testid": "7" }}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Timeline;