import React, { Component } from "react";
import Notification from "../Notification/Notification";
import css from "./Statistics.module.css";

export class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <>
        <h2>Statistics</h2>
        {(this.props.good === 0) &
        (this.props.neutral === 0) &
        (this.props.bad === 0) ? (
          <Notification mesage="No feedback given" />
        ) : (
          <div>
            <p className={css.good}>Good: {good}</p>
            <p className={css.neutral}>Neutral: {neutral}</p>
            <p className={css.bad}>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive Feedback: {positivePercentage}%</p>
          </div>
        )}
      </>
    );
  }
}
