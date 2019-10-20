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
    .then(res => {
       let data = res.data.quotes
       let quoteNum = Math.floor(Math.random() * data.length) //quote number
       let randomQuote = data[quoteNum] //actual quote

      console.log('randomQuote: ', randomQuote);
       this.setState({
          // quote: randomQuote['quote'],
          quote: randomQuote.quote,
          author: randomQuote['author']
       })

       console.log('this.state.quote : ', this.state.quote);

    })
 }

 getNewQuote = () => {
  this.getQuote()
}


  render(){
    console.log('render method runs')

    const { quote, author } = this.state;

    return (
      <div id="wrapper">
        <h1 className='title'>Random Quote App</h1>
        <div id='quote-box'>
          <div id='text'><p>{quote}</p></div>
          <div id='author'><h5>{author}</h5></div>
          {/* <div id='text'><p>{this.state.quote}</p></div>
          <div id='author'><h5>{this.state.author}</h5></div> */}
        </div>
      </div>
    )
  }
}

export default App;
