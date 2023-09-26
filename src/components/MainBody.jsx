import React from "react";
import attack from "../images/attack.png";
import defend from "../images/defend.png";

class MainBody extends React.Component {
  constructor(props) {
    // constructor of the class will always have 'props' as a parameter to pass to the base class (React.Component)
    super(props);
    this.HandleAttacks = this.HandleAttack.bind(this);
    this.HandleDefences = this.HandleDefence.bind(this);
    this.HandleRandomPlays = this.HandleRandomPlay.bind(this);
    this.HandleResets = this.HandleReset.bind(this);
    // State is immutable and we cannot directly change the state.
    // for e.g. this.state.count = 1 <---- we cant change the state like this
    this.state = {
      count: 0,
      lastplay: "",
      gamestatus:""
    };
  }

  HandleAttack(){
    // alert("Attack clicked");
    // setState is an async call
    // this.setState({
    //   count: this.state.count + 1
    // })

    this.setState((prevState) => {
      let newCount = prevState.count + Math.round(Math.random() * 10);
      return {
        count: newCount,
        lastplay: "attacked"
      };
    });
    this.HandleGameStatus()
  }

  HandleDefence(){
    this.setState((prevState) => {

      let newCount = prevState.count - Math.round(Math.random() * 10);

      return {
        count: newCount,
        lastplay: "defence"
      };
    });
    this.HandleGameStatus()
  }

  HandleRandomPlay(){

    let playMode = Math.round(Math.random() * 10);
    if(playMode == 0)
      this.HandleAttack()
    else
      this.HandleDefence()

    
  }

  HandleReset(){
    this.setState(() => {
      return {
        count:0
      }
            
    });
  }

  HandleGameStatus = () => {
      this.setState((prevState) => {
        let updatedCount = prevState.count;
        let lastGameStatus = prevState.gamestatus;

        if(updatedCount >= 10)
          lastGameStatus = "won!"
        else if(updatedCount <= -10)
          lastGameStatus = "lost!"
        else{
          lastGameStatus = "keep playing"
        }

        return{
          gamestatus: lastGameStatus
        }
      });

  }

  render() {
    return (
      <div className="row text-center">
        <h1>Game Score: {this.state.count}</h1>
        <p> You win at 10 points and lose at -10 points! </p>
        <p> Last Play: {this.state.lastplay } </p>
        <h3> Game Status: {this.state.gamestatus} </h3>
        <div className="col-6 col-md-3"></div>
        <div className="col-6 col-md-3">
          <img
            style={{
              width: "100%",
              cursor: "pointer",
              border: "1px solid black",
            }}
            className="p-4 rounded"
            src={attack}
            onClick={this.HandleAttacks}
          />
        </div>
        <div className="col-6 col-md-3">
          <img
            style={{
              width: "100%",
              cursor: "pointer",
              border: "1px solid red",
            }}
            className="p-4 rounded"
            src={defend}
            onClick={this.HandleDefences}
          />
        </div>
        <div className="col-12 col-md-4 offset-md-4">
          <button className="btn btn-secondary w-100 mt-2" onClick={this.HandleRandomPlays}>Random Play</button> <br />
          <button className="btn btn-warning w-100 mt-2" onClick={this.HandleResets}>Reset</button>
        </div>
      
      </div>
    );
  }
}

export default MainBody;
