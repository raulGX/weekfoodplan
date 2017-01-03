import React from 'react';
import Navbar from './commons/Navbar'
class App extends React.Component{
    render(){
        return(
            <div>
                <Navbar />
                <div className="container" style={{"padding-top": "100px"}}>
                    {this.props.children}
                </div>
            </div>

        );
    }
}

export default App;