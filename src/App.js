import { Component } from "react";
import Section from "./Components/Section/Section.jsx";
import { FeedbackOptions } from "./Components/FeedbackOptions/FeedbackOptions.jsx";
import { Statistics } from "./Components/Statistics/Statistics.jsx";

export class App extends Component {
  constructor() {
    super();
    this.total = 0;
    this.positiveFeedback = 0;
  }

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  reviewsСounterGood = () => {
    this.setState((prevState) => {
      return {
        good: (prevState.good += 1),
      };
    });
  };

  reviewsСounterNeutral = () => {
    this.setState((prevState) => {
      return {
        neutral: (prevState.neutral += 1),
      };
    });
  };

  reviewsСounterBad = () => {
    this.setState((prevState) => {
      return {
        bad: (prevState.bad += 1),
      };
    });
  };

  countTotalFeedback = () => {
    return (this.total = this.state.good + this.state.neutral + this.state.bad);
  };

  countPositiveFeedbackPercentage = () => {
    return (this.positiveFeedback = Math.round(
      (this.state.good / this.total) * 100
    ));
  };

  render() {
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{
            good: this.reviewsСounterGood,
            neutral: this.reviewsСounterNeutral,
            bad: this.reviewsСounterBad,
          }}
        />

        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </Section>
    );
  }
}
