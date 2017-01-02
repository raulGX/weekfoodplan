import React from 'react';
import Navbar from './commons/Navbar'
class App extends React.Component{
    render(){
        return(
            <div className="container">
                <Navbar />
                {this.props.children}
            </div>
        );
    }
}

export default App;