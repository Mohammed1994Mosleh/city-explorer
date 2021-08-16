import React from 'react';

import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'

import Button from 'react-bootstrap/Button'


class Location extends React.Component{

   constructor(props){
       super(props)
       this.state={
           cityName:'',
           datLOcation:{},
           showData:false,
           map:''
       }

   }


    getLocation=async(e)=>{

        e.preventDefault();
        await this.setState({
            cityName:e.target.city.value
        })

        let locURL = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_API_KEY}&q=${this.state.cityName}&format=json`;

       
       
        
   
         let resultData = await axios.get(locURL)

         await this.setState({
           datLOcation:resultData.data[0],
           
         
           map:`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_API_KEY}&center=${this.state.datLOcation.lat},${this.state. datLOcation.lon}&zoom=13&size=400x400&format=jpeg&maptype=roadmap&markers=icon:<icon>|<latitude>,<longitude>&markers=icon:<icon>|<latitude>,<longitude>`,
           
           showData:true

        })
        
      
   

 
   
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


      <Modal show={this.state.showData} >
          {console.log(this.state.map)}
         
          <Modal.Header closeButton>
               <Modal.Title>{this.state.cityName}</Modal.Title>
          </Modal.Header>
          <img src={this.state.map} />

          <Modal.Body>Lat:{this.state. datLOcation.lat} /Lon:{this.state. datLOcation.lon}!
          
            {/* <img src='' > */}
          </Modal.Body>

          
          <Modal.Footer>
             <Button variant="secondary" onClick={this.handleClose}>
               Close
             </Button>
           
          </Modal.Footer>
      </Modal>

          {/* {this.state.showData &&
            <p>{this.state.searchCity} Lat:{this.state. datLOcation.lat} /Lon:{this.state. datLOcation.lon} </p>
          } */}

        {/* <p>{this.state.searchCity} Lat:{this.state. datLOcation.lat} /Lon:{this.state. datLOcation.lon} </p> */}

</>



)



}

}

export default Location