import React from 'react';

import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';




class Location extends React.Component{

   constructor(props){
       super(props)
       this.state={
           cityName:'',
           datLOcation:{},
           showData:false,
           map:'',
           weather:[]
       }

   }


    getLocation=async(e)=>{

        e.preventDefault();
        await this.setState({
            cityName:e.target.city.value
        })

        let locURL = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_API_KEY}&q=${this.state.cityName}&format=json`;
        let wearUrl=`${process.env.REACT_APP_SERVER_LINK}/weather?searchQuery=${this.state.cityName}`


        
       
       
        
   
         let resultData = await axios.get(locURL);

         let wethData=await axios.get(wearUrl);

         await this.setState({
           datLOcation:resultData.data[0],
           
         
           map:`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_API_KEY}&center=${this.state.datLOcation.lat},${this.state. datLOcation.lon}&zoom=13&size=400x400&format=jpeg&maptype=roadmap&markers=icon:<icon>|<latitude>,<longitude>&markers=icon:<icon>|<latitude>,<longitude>`,
           
           

        })
        
        
        await this.setState({
          weather:wethData,

          showData:true
        })


        // console.log(this.state.weather);
        
      
   

 
   
       }


       handleClose=async()=>{
        await this.setState({
           
            showData:false
 
         })


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
             <Card style={{ width: '18rem' }}>
             <Card.Img variant="top" src={this.state.map} />
           <Card.Body>
             <Card.Title>{this.state.cityName}</Card.Title>
             <Card.Text>
                   Lat:{this.state. datLOcation.lat} /Lon:{this.state. datLOcation.lon}!
                        {console.log(this.state.weather.data)}
                        {console.log(this.state.weather.data[0].date)}

                        {this.state.weather.data.map((item,ind) =>{
                            return(
                              <>
                                  <p key={ind}>{item.date} 
                                       {item.lowtemp} 
                                       {item.maxtemp}                                 
                                  </p>
                              </>
                            )


                        } )}

                     {/* <p>{this.state.weather.data} </p> */}
 
             </Card.Text>
             <Button variant="primary">Go somewhere</Button>
           </Card.Body>
         </Card>
          }

        

      {/* <Modal show={this.state.showData} >


      {console.log(this.state.weather[1])}
         
          <Modal.Header closeButton>
               <Modal.Title>{this.state.cityName}</Modal.Title>
          </Modal.Header>
          <img src={this.state.map} />

          

          <Modal.Body>Lat:{this.state. datLOcation.lat} /Lon:{this.state. datLOcation.lon}!

           <p>{this.state.weather.discription} </p>
          
          
          </Modal.Body>

          
          <Modal.Footer>
             <Button variant="secondary" onClick={this.handleClose}>
               Close
             </Button>
           
          </Modal.Footer>
      </Modal> */}



      

          {/* {this.state.showData &&
            <p>{this.state.searchCity} Lat:{this.state. datLOcation.lat} /Lon:{this.state. datLOcation.lon} </p>
          } */}

        {/* <p>{this.state.searchCity} Lat:{this.state. datLOcation.lat} /Lon:{this.state. datLOcation.lon} </p> */}

</>



)



}

}

export default Location