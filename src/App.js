import React, { Component } from 'react';
import './lib/westeros';
import './App.css';
import getData from './httpRequest'
import drawLine from './chart/line'

const mockData = [
  {
    name: "percentage",
    value: [10, 20, 30, 40, 50]
  },
  {
    name: "count",
    value: [3, 5, 15, 18, 20]
  }
]
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percentage: 0,
      count: 0
    }
  }
  componentWillMount() {
    this.fetchData()
  }

  fetchData() {
    getData().then(response => {
      this.setState({
        percentage: response.percentage,
        count: response.count
      })
    })
  }

  componentDidMount() {
    drawLine(document.getElementById('graph-line'), "trash-monitor-result", mockData)
    // setInterval(() => this.fetchData, 10000)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="title">Trash Monitor</h1>
        </header>
        <section className="trash-info">
          <div className="trash-image">
            <img src="https://img.icons8.com/office/300/000000/full-trash.png" />
          </div>
          <div className="trash-description">
            <h2>今天你扔垃圾了吗</h2>
            <p>
              垃圾入箱、举手之劳。
              垃圾混置是垃圾，垃圾分类是资源。
              举手之劳，资源永续的源泉。
              公德竞赛，今天正式开赛。
              让环保扎根现在，用绿色昭示未来。
            </p>
          </div>
        </section>
        <section className="trash-graph">
          <div className="trash-description">
            <h2>今天你扔垃圾了吗</h2>
            <p>
              垃圾入箱、举手之劳。
              垃圾混置是垃圾，垃圾分类是资源。
              举手之劳，资源永续的源泉。
              公德竞赛，今天正式开赛。
              让环保扎根现在，用绿色昭示未来。
            </p>
          </div>
          <div id="graph-line" />
        </section>
      </div>
    );
  }
}

export default App;
