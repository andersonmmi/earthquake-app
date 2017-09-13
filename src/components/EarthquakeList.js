import React, {Component} from "react";
import earthquakes from "../earthquakes.js"

class EarthquakeList extends Component{
  render(){
    let earthquakeList = earthquakes.features.map((quakeTitles)=>{
    return(<div className="quake-titles" key={quakeTitles.id}>
      <p>{quakeTitles.title}</p>
    </div>);
    });
    return(
      <div className="EarthquakeList">
        {earthquakeList}
      </div>
    );
  }
}

export default EarthquakeList;
