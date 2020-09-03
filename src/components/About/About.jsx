import React from "react";
import { Segment, Header } from "semantic-ui-react";
import PImage from "./PImage/PImage";
class About extends React.Component {
  constructor(props) {
    super(props);
    this.interval = null;
    this.quotes = [
      '"Never do tomorrow what you can do today. Procrastination is the thief of time." – Charles Dickens',
      '“There are far, far better things ahead than any we leave behind.”– CS Lewis',
      '“Our lives begin to end the day we become silent about things that matter.” – Martin Luther King Jr.',
      '"Strive not to be a success, but rather to be of value." –Albert Einstein',
      '"Life is 10% what happens to me and 90% of how I react to it." –Charles Swindoll',
      '"Your time is limited, so don’t waste it living someone elses life." – Steve Jobs'
    ];
    this.state = { quote: this.quotes[0]};
  }
  componentDidMount = () => {
    this.interval = setInterval(() => {
      this.setState({ quote: this.getRandomQuote(this.quotes) });
    }, 3000);
  };
  componentWillUnmount = () => {
    clearInterval(this.interval);
  };

  getRandomQuote = (array) => {
    return array[Math.ceil(Math.random() * array.length - 1)];
  };
  render() {
    return (
      <Segment className="about">
                <Header as="h2">Kenyatta Hill</Header>
        <div>
          <PImage />
        </div>
        <div style={{marginTop: "15px"}}>
          <h2>Inspiration</h2>
          <p>{this.state.quote}</p>
        </div>
        <div style={{marginTop: "15px"}}>
          <h3>About Me</h3>
          <p>
            Hello, my name Kenyatta Hill. I currently reside in Utah, although I
            was born and raised in Tucson, AZ. In my previous profession, I
            spent over twenty seven years in the grocery retail industry and had
            an amazing career. Growing into management for nineteen of those
            twenty seven years. In my viewpoint, the most rewarding aspect of a
            management position was being able to be an active part of the lives
            of the associates I affected. In addition I thrived on inspiring and
            helping others to grow into their dreams.
          </p>
          <p>
            My new main goal is to start a new long lasting career in IT,
            Programing, and/or Cyber Security and to get there I am currently
            enrolled at Grand Canyon University on my way to achieving a
            bachelor’s degree in information Technology. I have five wonderful
            sons ranging in ages from 15 to 26. My top loves are my boys and
            basketball, which I play weekly. I am also a certified master diver
            with about 70 logged dives including those in Hawaii, Honduras, and
            Curacao.
          </p>
        </div>
        
      </Segment>
    );
  }
}
export default About;
