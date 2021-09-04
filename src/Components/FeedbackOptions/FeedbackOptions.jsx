import React, { Component } from "react";
import css from "./FeedbackOptions.module.css";

export class FeedbackOptions extends Component {
  render() {
    const { good, neutral, bad } = this.props.options;

    return (
      <div>
        <button
          type="button"
          className={`${css.button} ${css.good}`}
          onClick={good}
        >
          Good
        </button>

        <button
          type="button"
          className={`${css.button} ${css.neutral}`}
          onClick={neutral}
        >
          Neutral
        </button>

        <button
          type="button"
          className={`${css.button} ${css.bad}`}
          onClick={bad}
        >
          Bad
        </button>
      </div>
    );
  }
}
