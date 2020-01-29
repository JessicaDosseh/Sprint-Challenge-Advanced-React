import React from 'react'; 

class PlayersList extends React.Component {
  constructor() {
    super(); 
    this.state = {
      players: [], 
    }; 
  }

  componentDidMount() {
    console.log("component did mount");
    fetch('http://localhost:5000/api/players')
        .then(res => res.json())
        .then(result => { console.log(result); this.setState({ players: result }) })
        .catch(err => console.log('Error fetching players.', err));
  }

  render() {
    return (
        <div className="playerList">
          <h2>Players:</h2>
          {/* <hr></hr> */}
          <br/>
          {this.state.players.map((item) => 
            <div>
              <h3>Player: {item.name}</h3>
              <p>Player ID: {item.id}</p>
              <p>Country: {item.country}</p>
              <p>Searches: {item.searches}</p>
              <br/>
            </div>
          )}
        </div>
    );
  }

}

export default PlayersList; 