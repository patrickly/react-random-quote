import React, {Component} from 'react';


class App extends Component {

  constructor(props){
    super(props);

    console.log('constructor runs')

  }

  componentDidMount() {
    console.log('componentDidMount runs')
  }

  render(){
    console.log('render method runs')
    return (<div>hzi</div>)
  }
}

export default App;
