import React from 'react';

class Movie extends React.Component {
constructor(props){
super(props)
this.state={

    movieDatastate:this.props.movieDatapros
}

}


render(){
    console.log(this.props.movieDatapros);
return(


<p>hi</p>


)
}
}

export default Movie;