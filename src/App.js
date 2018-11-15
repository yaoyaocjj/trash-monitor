import React, {Component} from 'react';
import './App.css';
import axios from "axios";

const mockData = [
  {
    name: "percentage",
    value: [10, 20, 30, 40, 50]
  },
  {
    name: "count",
    value: [3, 5, 15, 18, 20]
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percentage: 0,
      count: 0
    }
  }

  fetchData = () => {
    // axios.get('/mock/data').then(response => {
    //   console.log('------');
    //   const {data} = response;
    //
    //   this.setState({...data});
    //   this.renderPercentage(data.percentage || 0.1)
    // })
      this.renderPercentage(10)

  };

  componentDidMount() {
    setInterval(this.fetchData, 1000)
  }

  renderPercentage(percentage) {
    let leftContent  = document.querySelector(".left-content");
    let rightContent  = document.querySelector(".right-content");
    let textCircle   = document.querySelector(".text-circle");

    let angle = percentage * 360 / 100;
    console.log(leftContent);

    if (angle > 360) {
      angle = 0;
    }

    if (angle > 180) {
      leftContent.setAttribute('style', 'transform: rotate(' + 180 + 'deg)');
      rightContent.setAttribute('style', 'transform: rotate(' + (angle - 180) + 'deg)');
    } else {
      rightContent.setAttribute('style', 'transform: rotate(' + 0 + 'deg)');
      leftContent.setAttribute('style', 'transform: rotate(' + angle + 'deg)');
    }

    textCircle.innerHTML = parseInt(angle * 100 / 360) +'%'
  }

  render() {
    return (
        <div className="App">
          <div className="circle"/>
          <section className="trash-info">
            <div className="trash-image">
              <div className="icon-trash">
                <div className="trash-lid" style={{backgroundColor: "#64646445"}}></div>
                <div className="trash-container" style={{backgroundColor: "#64646445"}}></div>
                <div className="trash-line-1"></div>
                <div className="trash-line-2"></div>
                <div className="trash-line-3"></div>
              </div>
            </div>
            </section>
            <div className="app-description">
              <h2 className="title">Trash Monitor</h2>
              <p>An excellent waste monitoring software</p>
            </div>
          <div className="circle-container circle-container-count">
            <span className="count-text">{this.state.count}次</span>
          </div>
          <div className="circle-container circle-container-other" >
            <div className="map"/>
          </div>
          <div className="con">
            <div className="percent-circle percent-circle-left">
              <div className="left-content"></div>
            </div>
            <div className="percent-circle percent-circle-right">
              <div className="right-content"></div>
            </div>
            <div className="text-circle">10%</div>
          </div>
        </div>
    );
  }
}

export default App;
