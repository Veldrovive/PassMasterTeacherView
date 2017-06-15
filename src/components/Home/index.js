import React, {Component} from 'react';
import './style.css'

import Graph from '../Graph'

export default class Home extends Component{
  render(){
    return(
      <div>
        <h3 className="Header">Home</h3>
        <Graph/>
      </div>
    )
  }
}
