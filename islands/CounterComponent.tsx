import { Button } from "../components/Button.tsx";
import { Component } from "preact";

interface CounterProps {
  count: number;
}

export default class CounterComponent extends Component {
  state: CounterProps;

  constructor(props: CounterProps) {
    super(props);
    this.state = {
      count: props.count || 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState((currentCount: CounterProps) => {
      return { count: currentCount.count - 1 };
    });
  };

  render() {
    return (
      <div class="flex gap-8 py-6">
        <Button onClick={this.decrement}>-1</Button>
        <p class="text-3xl">{this.state.count}</p>
        <Button onClick={this.increment}>+1</Button>
      </div>
    );
  }
}
