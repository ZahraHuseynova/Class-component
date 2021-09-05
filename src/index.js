import React from "react";
import ReactDOM from "react-dom";
import SeasonalDisplay from "./SeasonDisplay";

class App extends React.Component {
    state={lat:null,errorMessage:null};

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
        (position)=>this.setState({lat:position.coords.latitude}),
        (err)=>this.setState({errorMessage:err.message})
    );

    }

    componentDidUpdate(){
        
    }

    renderContent(){
        if (this.state.lat && !this.state.errorMessage){
            return <SeasonalDisplay lat={this.state.lat}/>;
        }

        if (this.state.errorMessage && !this.state.lat){
            return <div>Error:{this.state.errorMessage}</div>
        }
        return <div>Loading...</div>

    }
    
    render() {
        return<div>{this.renderContent()}</div>
        
        
    };
    
}

ReactDOM.render(<App/>,document.getElementById("root"))