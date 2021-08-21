import React from 'react';

class Weather extends React.Component {
constructor(props){
super(props)
this.state={

    weatherDatastate:this.props.weatherDatapros
}

}


render(){
    console.log(this.state.weatherDatastate);
return(
<>
{this.state.weatherDatastate.length &&
this.state.weatherDatastate.map(item =>{
return(
<>
<p> date:{item.date}
    description:{item.description}
    lat from weather:{item.lat}
    lon from weather:{item.lon}
</p>
</>

)



})


}




{/* <p>hi</p> */}

</>
)
}
}

export default Weather;