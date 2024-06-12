import React, { Component } from 'react';

class state extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "dellai khoubeib",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        imgSrc: "./dellai.jpg",
        profession: "Software Engineer"
      },
      show: false,
      timeElapsed: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        timeElapsed: prevState.timeElapsed + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleProfile = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };

  render() {
    const { person, show, timeElapsed } = this.state;

    return (
      <div>
        <button onClick={this.toggleProfile}>
          {show ? 'Hide Profile' : 'Show Profile'}
        </button>
        {show && (
          <div>
            <h2>{person.fullName}</h2>
            <img src={person.imgSrc} alt={person.fullName} />
            <p>{person.bio}</p>
            <p>Profession: {person.profession}</p>
          </div>
        )}
        <p>Time elapsed since mount: {timeElapsed} seconds</p>
      </div>
    );
  }
}

export default state;
