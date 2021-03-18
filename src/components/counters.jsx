import React, { Component } from "react";
import Counter from "./counter";

class counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 4, value: 0 },
      { id: 6, value: 0 },
    ],
  };
  handleDelete = (Id) => {
    const NewCounters = this.state.counters.filter((c) => c.id !== Id);
    this.setState({ counters: NewCounters });
  };

  render() {
    return (
      <div>
        {this.state.counters.map((counters) => (
          <Counter key={counters.id} OnDelete={this.handleDelete} value={counters.value} CounId={counters.id}>
            <h3>Title</h3>
          </Counter>
        ))}
      </div>
    );
  }
}

export default counters;
