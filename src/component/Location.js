import React from "react";

import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Movie from "./Movie";
import Weather from "./Weather";

class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: "",
      datLOcation: {},
      showData: false,
      map: "",
      weather: [],
      weath2Datastate: [],
      moviesState: [],
    };
  }

  getLocation = async (e) => {
    e.preventDefault();
    await this.setState({
      cityName: e.target.city.value,
    });
    let locURL = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_API_KEY}&q=${this.state.cityName}&format=json`;
    let wearUrl = `${process.env.REACT_APP_SERVER_LINK}/weather?searchQuery=${this.state.cityName}`;
    let wearUrl2 = `${process.env.REACT_APP_SERVER_LINK}/weather1?searchQuery=${this.state.cityName}`;
    let movIeurl = `${process.env.REACT_APP_SERVER_LINK}/movies?searchQuery=${this.state.cityName}`;

    let resultData = await axios.get(locURL);
    let wethData = await axios.get(wearUrl);
    let weath2Data = await axios.get(wearUrl2);
    let movieData = await axios.get(movIeurl);

   
    console.log(movieData);

    await this.setState({
      datLOcation: resultData.data[0],
      weather: wethData,
      weath2Datastate: weath2Data,
      moviesState: movieData,
    });
    console.log(this.state.moviesState);

    let map1 = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_API_KEY}&center=${this.state.datLOcation.lat},${this.state.datLOcation.lon}&zoom=13&size=400x400&format=jpeg&maptype=roadmap&markers=icon:<icon>|<latitude>,<longitude>&markers=icon:<icon>|<latitude>,<longitude>`;
    await this.setState({
      showData: true,
      map: map1,
    });
  };

  render() {
    return (
      <>
        <h2>City Explorer</h2>

        <form onSubmit={this.getLocation}>
          <input type="text" placeholder="Enter city" name="city" />
          <button>Explore</button>
        </form>

        {this.state.showData && (
          <>

            <img src={this.state.map} alt={this.state.cityName} />
            
            <p>{this.state.cityName}</p>
            <p> Lat:{this.state.datLOcation.lat}</p>
            <p>Lon:{this.state.datLOcation.lon}</p>

           
           
            
           

            {this.state.weath2Datastate.data.map((item, ind) => {
              
                return(

                  <>
                    <Weather key={ind} weatherDatapros={item} />
                  
                  </>
                )
              
            })}
            {this.state.moviesState.data.map((item,inx) =>{
              return( 
               <Movie key={inx} movieDatapros={item} />
               )  

            })

            }




          </>
        )}
      </>
    );
  }
}

export default Location;
