import React, {Component} from 'react'
import {Line} from 'react-chartjs-2'

export default class Graph extends Component{
  constructor(){
    super();

    this.state = {value: '', data: []};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    const value = e.target.value;
    this.setState({value: value})
  }

  handleSubmit(e){
    let a = Array.from(this.state.data);
    a.push(this.state.value);
    this.setState({data: a});

    e.preventDefault();
  }

  render(){
    let labels = [];
    const a = this.state.data;

    let counter = 0;
    a.forEach(() => {
      labels.push(counter);
      counter++
    });


    const data = {
      labels: labels,
      datasets: [{
        label: '# of student',
        data: a
      }]
    };
    return(
      <div>
        <Line data={data}/>
        <form onSubmit={this.handleSubmit}>
          What Value: <br/>
          <input type="text" name="value" value={this.state.value} onChange={this.handleChange}/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}