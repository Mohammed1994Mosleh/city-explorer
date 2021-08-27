import React from 'react';

class Weather extends React.Component {
constructor(props){
super(props)
this.state={

    weatherDatastate:this.props.weatherDatapros
}

}


render(){
return(
<>

<p>date:{this.props.weatherDatapros.date}</p>
<p>description:{this.props.weatherDatapros.description}</p>

</>
)
}
}

export default Weather;