import React, {Component} from 'react';
import axios from 'axios'


class App extends Component {

  constructor(props){
    super(props);

    console.log('constructor runs')

    this.state = {
      quote: '',
      author: ''
   }
  }

  componentDidMount() {
    console.log('componentDidMount runs')
    this.getQuote();
  }

  getQuote() {
    let url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

    axios.get(url)
       .then(res => console.log(res))
 }


  render(){
    console.log('render method runs')
    return (<div>hzi</div>)
  }
}

export default App;
