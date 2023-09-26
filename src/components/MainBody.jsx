import React from "react";


class MainBody extends React.Component {

  constructor(props){ // constructor of the class will always have 'props' as a parameter to pass to the base class (React.Component) 
    super(props);
    this.HandleAttacks = this.HandleAttack.bind(this);
    this.HandleDefences= this.HandleDefence.bind(this);

    // State is immutable and we cannot directly change the state.
    // for e.g. this.state.count = 1 <---- we cant change the state like this
    this.state = {
        count: 0
    }
  }

  HandleAttack() {
    // alert("Attack clicked");
    // setState is an async call
    // this.setState({
    //   count: this.state.count + 1
    // })

    this.setState((prevState) => {
      return {
        count: prevState.count + 100
      };
    });

    this.setState((prevState) => {
      return{
        count: prevState.count + 20
      }
    });

    // this.setState = (prevState) => {
    //   return{
    //     count:prevState.count + 10
    //   }
    // }
  };  

  HandleDefence(){
    // alert("Defence clicked");
    this.setState({
      count: this.state.count - 1
    })
  };

  render() {
    return (
      <div className="row">
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.HandleAttacks} style={{ width: "200px" }}>
          {" "}
          +1{" "}
        </button>
        <button onClick={this.HandleDefences} style={{ width: "200px" }}>
          {" "}
          -1{" "}
        </button>
      </div>
    );
  }
}

export default MainBody;
