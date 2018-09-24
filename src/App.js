import React from 'react'
import editions from './Editions'

class Header extends React.Component {
  render () {
    return (
      <div>
        <div className='topDiv' />
        <div className='bottomDiv' />
        <h4 className='title'>Oblique Strategies</h4>
      </div>
    )
  }
}

class DeckSelector extends React.Component {
  render () {
    const decks = ['Edition 1', 'Edition 2', 'Edition 3', 'Edition 4']

    return (
      <ul className='deckSelector'>
        {decks.map((deck, i) => {
          return (
            <li
              style={
                i === this.props.selectedDeck
                  ? { fontWeight: 800, color: '#b9d0ca' }
                  : null
              }
              key={i}
              data-key={i}
              onClick={this.props.onClick.bind(null, i)}
            >
              {deck}
            </li>
          );
        })}
      </ul>
    );
  }
}

class Button extends React.Component {
  render() {
    return (
      <div className='btn' onClick={this.props.onClick}>
        New
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      strategy: editions[0][Math.floor(Math.random() * editions[0].length)],
      deck: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleDeckChange = this.handleDeckChange.bind(this);
  }

  componentDidMount(func) {
    window.addEventListener('keydown', e => {
      if (e.keyCode === 32) {
        this.handleChange();
      }
    });
  }

  componentWillUnmount(func) {
    window.addEventListener('keydown', e => {
      if (e.keyCode === 32) {
        this.handleChange();
      }
    });
  }

  handleChange() {
    this.setState({
      strategy:
        editions[this.state.deck][
          Math.floor(Math.random() * editions[this.state.deck].length)
        ]
    });
  }

  handleDeckChange(i) {
    // console.log('before: ' + this.state.deck);
    // if (!e.target.hasAttribute('data-key')) return;
    this.setState({
      deck: i,
      strategy: editions[this.state.deck][Math.floor(Math.random() * editions[this.state.deck].length)]
    })
    // console.log('after: ' + this.state.deck);
  }

  render () {
    return (
      <div className='container'>
        <Header />
        <DeckSelector
          selectedDeck={this.state.deck}
          onClick={this.handleDeckChange}
        />
        <div className='deck'>
          <small>{this.state.deck + 1}</small>
          <h2>{this.state.strategy}</h2>
        </div>
        <Button onClick={this.handleChange} />
      </div>
    )
  }
}

export default App
