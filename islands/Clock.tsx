import { Component } from "preact";

export default class Clock extends Component {
  state: { time: number };

  constructor() {
    super();
    this.state = { time: Date.now() };
  }

  componentDidMount() {
    this.state.time = setInterval(() => {
      this.setState({
        time: Date.now(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.state.time);
  }

  render() {
    const time = new Date(this.state.time).toLocaleTimeString();
    return <h1>{time}</h1>;
  }
}
