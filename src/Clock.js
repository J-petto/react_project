import React from 'react';
import './Clock.css';

class MyClock extends React.Component {
    constructor(props){
      super(props)
      /*this.state = {
        time: this.getWorldTime()
      }*/
    }
  
    /*componentDidMount(){
      this.interval = setInterval(()=>{
        this.setState({
          time: this.getWorldTime()
        })
      }, 1)
    }*/
    
    formatTime(time) {
      return time < 10 ? '0'+time : time;
    }
    
    formatMs(time) {
      return time < 100 ? (time < 10 ? '00'+time : '0'+time) : time;
    }
    
    /*getWorldTime() {
      const time = new Date();
      const { num } = this.props;
      const tz = time.getTime() + (time.getTimezoneOffset() * (60 * 1000)) + (num * (60 * 60 * 1000));
      time.setTime(tz);
      return time;
    }*/
    
    render() {
      const { color } = this.props;
      const { time } = this.state;
      const Y = time.getFullYear();
      const M = (time.getMonth()+1);
      const D = time.getDate();
      const h = this.formatTime(time.getHours());
      const m = this.formatTime(time.getMinutes());
      const s = this.formatTime(time.getSeconds());
      const ms = this.formatMs(time.getMilliseconds());
  
      return (
        <div className="clockBox" style={{ color }}>
          <div className="innerBox">
            <span className="date font">{Y}. {M}. {D}</span>
            <span className="time font">{h}:{m}:{s}:{ms}</span>
          </div>
        </div>
      )
    }
  }
  
  /*class MyApp extends React.Component {
    constructor(props){
    super(props)
      this.state = {
        changeColorCount: 0,
        timezoneArray: [
          { world: "한국", GTM: +9 },
          { world: "뉴욕", GTM: -4 },
          { world: "파리", GTM: +2 },
          { world: "중국", GTM: +8 },
        ]
      }
    }
    
    componentDidMount(){
      this.interval = setInterval(()=>{
        this.setState({
          changeColorCount: this.state.changeColorCount + 1
        })
      }, 1000)
    }
  
    getRandomValue = (min, max) =>{
      return Math.random() * (max - min) + min;
    }
  
    randomColor(){
      return `rgb(${this.getRandomValue(150,256)},${this.getRandomValue(150,256)},${this.getRandomValue(150,256)})`
    }
    
    render(){
        const { timezoneArray } = this.state;
      return (
        <div className="app-main">
          <span style={{color:"white"}}>My App</span><p></p>
          { timezoneArray && timezoneArray.map((data,i)=>{
              return <MyClock key={i} 
                color={this.randomColor()} 
                world={data.world} 
                num={data.GTM} />
            })
          }
        </div>
      )
    }
  }*/
  
  export default MyClock;

  //ReactDOM.render( < MyApp / > , document.querySelector("#app"))