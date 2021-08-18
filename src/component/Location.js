import React from 'react';

import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';




class Location extends React.Component{

   constructor(props){
       super(props)
       this.state={
           cityName:'',
           datLOcation:{},
           showData:false,
          //  map:'',
           weather:[],
           ccityWeatherandmovie:'',
           movies:[]
       }

   }


    getLocation=async(e)=>{

        e.preventDefault();
        await this.setState({
            cityName:e.target.city.value
        })
        // https://eu1.locationiq.com/v1/search.php?key=YOUR_ACCESS_TOKEN&q=SEARCH_STRING&format=json
        let locURL = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_API_KEY}&q=${this.state.cityName}&format=json`;
        let wearUrl=`${process.env.REACT_APP_SERVER_LINK}/weather?searchQuery=${this.state.cityName}`
        let resultData = await axios.get(locURL);
        let wethData=await axios.get(wearUrl);
        // console.log(resultData);
        // console.log(wethData);
       
         await this.setState({
           datLOcation:resultData.data[0],
           weather:wethData,
           
            
           })
           console.log(this.state.datLOcation)

           
     console.log(this.state.datLOcation.lat);
          let map=`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_API_KEY}&center=${this.state.datLOcation.lat},${this.state. datLOcation.lon}&zoom=13&size=400x400&format=jpeg&maptype=roadmap&markers=icon:<icon>|<latitude>,<longitude>&markers=icon:<icon>|<latitude>,<longitude>`;
          console.log(map);
          await this.setState({
            showData:true
           })
          
        
        console.log(this.state.datLOcation);
        console.log('fdgfdsd',this.state.weather);

        
        
      
   

 
   
       }

       


   

render(){


   

return(
<>
     <h2>City Explorer</h2>
    
     <form onSubmit={this.getLocation}>
        <input type='text' placeholder='Enter city' name='city' />
        <button>Explore</button>
     </form>





    {this.state.showData &&

    <>
    <p>{this.state.cityName}</p> 
    <p>  Lat:{this.state.datLOcation.lat}</p>
    <p>Lon:{this.state.datLOcation.lon}</p>
    <img src={this.map} />

    </>
 
 
 }
   
</>)}}

export default Location