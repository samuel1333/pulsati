import './Who.css'
import React, { Component } from 'react'
import WhoContent from './WhoContent';


export default class Who extends Component {
  constructor() {
    super();
    this.state = {
       className: 'hidden'
    }
  }
  handleScroll() { 
   if (document.documentElement.scrollTop >= 1900) {
      this.setState({
        className: 'show'
      })
    } 
  }

  componentDidMount() {
    window.onscroll = () => this.handleScroll()
  }
  render( ) {
    return (
      <>
        <WhoContent className={this.state.className} />
      </>
    )
  }
}
