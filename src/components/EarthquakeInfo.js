import React, {Component} from "react";
import moment from "moment";
import earthquakes from "../earthquakes.js"

class EarthquakeInfo extends Component{
  render(){
let earthquakeInfo = earthquakes.features.map((quakes)=>{
return(<div className="col-sm-6" key={quakes.id}>
  <div className="card" >
    <div className="card-block">
      <h4 className="card-title">{quakes.place}</h4>
      <h6 className="card-subtitle mb-2 text-muted">Magnitude: {quakes.magnitude}</h6>
      <h6 className="card-subtitle mb-2 text-muted">Time: {moment(quakes.time).format('llll')}</h6>
      <p className="card-text">Coordinates: "***"</p>

      <a href={quakes.url} className="card-link">USGS Event Link</a>

    </div>
  </div>
</div>);
});
    return(
      <div className="EarthquakeInfo">
        {earthquakeInfo}
      </div>
    )
  }
}

export default EarthquakeInfo;
