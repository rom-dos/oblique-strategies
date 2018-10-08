import React from 'react'
import styled, { css } from 'styled-components'
import editions from './Editions'

// Colors
const teal = '#b9d0ca'
const teal0 = '#f7faf9'
const teal1 = '#e7efed'
const teal2 = '#d6e4e0'
const teal3 = '#c4d7d2'
const teal4 = '#b2c9c3'
const teal5 = '#a3b7b2'
const teal6 = '#92a49f'
const teal7 = '#7d8c88'
const teal8 = '#626f6c'
const teal9 = '#3a413f'
const tealAlt = '#e1eae9'

const userSelect = css`
  -webkit-user-select: none; 
     -moz-user-select: none; 
      -ms-user-select: none; 
          user-select: none;
`

const headerDivs = css`
  width: 320px;
  height: 180px;
  margin: 0 auto;
`

const TopDiv = styled.div`
  ${headerDivs}
  background-color: ${teal};
  border-bottom-right-radius: 4rem;
`

const BottomDiv = styled.div`
  ${headerDivs}
  background-color: ${tealAlt};
  position: relative;
  top: -10rem;
  right: 1.2rem;
  border-top-right-radius: 4rem;
  box-shadow: 1px 12px 18px ${teal};
`

const Title = styled.h4`
  color: ${teal9};
  text-align: center;
  letter-spacing: 0.92rem;
  font-weight: 400;
  position: relative;
  top: -18.2rem;
  margin-bottom: -10rem;
  font-size: 1.4rem;
  text-shadow: 1px 8px 18px ${teal8};
  ${userSelect}
`

class Header extends React.Component {
  render () {
    return (
      <div>
        <TopDiv />
        <BottomDiv />
        <Title>Oblique Strategies</Title>
      </div>
    )
  }
}

const Selector = styled.ul`
  color: ${teal9};
  display: flex;
  list-style-type: none;
  font-size: 16px;
  margin: 0 auto;
  border-bottom: 3px solid ${tealAlt};
  max-width: 340px;
  ${userSelect}
`

const SelectorIdx = styled.li`
  padding: 0.7rem;
  width: 100%;

  &:first-of-type {
    margin-left: -1.9rem;
  }
  &:hover {
    color: ${teal};
    transform: scale(1.1);
  }
`

class DeckSelector extends React.Component {
  render () {
    const decks = ['Edition 1', 'Edition 2', 'Edition 3', 'Edition 4']

    return (
      <Selector>
        {decks.map((deck, i) => {
          return (
            <SelectorIdx
              style={
                i === this.props.selectedDeck
                  ? { fontWeight: 800, color: `${teal}`, transform: 'scale(1.1)' }
                  : null
              }
              key={i}
              data-key={i}
              onClick={this.props.onClick.bind(null, i)}
            >
              {deck}
            </SelectorIdx>
          )
        })}
      </Selector>
    )
  }
}

const Btn = styled.div`
  display: block;
  width: 6rem;
  margin: 0 auto 4rem auto;
  text-align: center;
  color: black;
  padding: 0.4rem;
  border-radius: 1rem;
  background: linear-gradient(to right, ${tealAlt}, ${teal});
  box-shadow: 1px 4px 2px ${teal};
  font-size: 1rem;
  letter-spacing: 0.1rem;
  font-weight: 200;
  ${userSelect}

  &:hover {
    background: linear-gradient(to right, ${teal}, ${tealAlt});
    transform: scale(1.02);
  }
  &:active {
    transform: translateY(2px)
  }
`

class Button extends React.Component {
  render () {
    return (
      <Btn onClick={this.props.onClick}>
        New
      </Btn>
    )
  }
}

const Container = styled.div`
  margin: 0;
  padding: 0;
  margin-top: 4rem;

  @media (max-width: 480px) {
    width: 100vw;
  }
`

const Deck = styled.div`
  margin: 3rem auto 1.8rem auto;
  border: 1px dashed ${teal};
  padding: 1.8rem;
  border-radius: 0.4rem;
  width: 320px;
  box-shadow: 1px 2px 6px ${teal};
  height: 120px;

  @media (max-width: 480px) {
    width: 300px;
  }
`

const Strategy = styled.h2`
  color: ${teal8};
  text-align: center;
  font-weight: 400;
  letter-spacing: 0.09rem;
  font-size: 1.1rem;
  padding: 1rem;
  margin-top: 0.4rem;
  line-height: 1.4rem;
`

const CurrentDeckSmall = styled.small`
  color: ${teal7};
  display: inline-block;
  margin-top: -1.2rem;
  position: absolute;
  z-index: -1;
`

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      strategy: editions[0][Math.floor(Math.random() * editions[0].length)],
      deck: 0
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleDeckChange = this.handleDeckChange.bind(this)
  }

  componentDidMount (func) {
    window.addEventListener('keydown', e => {
      if (e.keyCode === 32) {
        this.handleChange()
      }
    })
  }

  componentWillUnmount (func) {
    window.addEventListener('keydown', e => {
      if (e.keyCode === 32) {
        this.handleChange()
      }
    })
  }

  handleChange () {
    this.setState({
      strategy:
        editions[this.state.deck][Math.floor(Math.random() * editions[this.state.deck].length)]
    })
  }

  handleDeckChange (i) {
    this.setState({
      deck: i,
      strategy: editions[this.state.deck][Math.floor(Math.random() * editions[this.state.deck].length)]
    })
  }

  render () {
    return (
      <Container>
        <Header />
        <DeckSelector
          selectedDeck={this.state.deck}
          onClick={this.handleDeckChange}
        />
        <Deck>
          <CurrentDeckSmall>{this.state.deck + 1}</CurrentDeckSmall>
          <Strategy>{this.state.strategy}</Strategy>
        </Deck>
        <Button onClick={this.handleChange} />
      </Container>
    )
  }
}

export default App
