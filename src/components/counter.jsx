import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.value,
    tags: [],
    // imageUrl: "https://picsum.photos/200",
  };
  styles = {
    fontSize: 30,
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  handleIncrement = () => {
    console.log("Increment Clicked!", this);
    this.setState({
      count: this.state.count + 1,
    });
  };

  RenderTags() {
    if (this.state.tags.length === 0) return <h6 className="text-warning">they are no text here bois</h6>;
    return;
  }
  render() {
    console.log("props", this.props);
    return (
      <React.Fragment>
        <div className="text-center">
          {/* <img src={this.state.imageUrl} alt="my-image"></img> */}
          <div>
            {/* {this.props.children} @ {this.props.CounId} */}
            <span style={this.styles} className={this.GetClass()}>
              {this.Change()}
            </span>
          </div>
          <div>
            <button
              onClick={() => {
                this.handleIncrement({ id: 1 });
              }}
              className="btn btn-warning"
            >
              Increment
            </button>
            <button onClick={() => this.props.OnDelete(this.props.CounId)} className="btn btn-danger m-2">
              Delete
            </button>
          </div>

          {/* {this.RenderTags()} */}
          {/* <ul>
          {this.state.tags.map((tag) => ( 
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}
        </div>
      </React.Fragment>
    );
  }

  GetClass() {
    let classes = "badge m-4 badge-";
    classes += this.state.count === 0 ? "warning" : "secondary";
    return classes;
  }

  Change() {
    return this.state.count === 0 ? "Zero" : this.state.count;
  }
}

export default Counter;
