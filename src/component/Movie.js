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
<>


 <p>Title:{this.props.movieDatapros.title}</p>
 
 <p>releasedate:{this.props.movieDatapros.releasedate}</p>


</>






)
}
}
//title adult  releasedate
export default Movie;