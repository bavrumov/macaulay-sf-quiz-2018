import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Question extends Component {
    // Properties of a question
    static propTypes = {
        number : PropTypes.number,      // Q1, Q2,
        question : PropTypes.string,   // "What is the answer to this question?"
        choices : PropTypes.array,    // ["Choice one","choice two"]
        answer : PropTypes.number    // 1, 2, 3, or 4.
    }

    // Populates the answer choices based on the array of choices passed in as a prop
    createChoices = () => {
      let answerChoices=[];
      for (let i=0; i<this.props.choices.length; i++){
        answerChoices.push(
          <label key={i}>
            <input type="radio" name={"Question"+this.props.number } value={i+1}/>
            {this.props.choices[i]}<br></br>
          </label> 
        )
      }
      return answerChoices;
    }

  // Displays a single question in the correct format:
  // #) Question Text
  //  •A
  //  •B, etc
  render() {
    return (
      <div>
        <div className="questions"><span>{this.props.number+") "}</span>
          <span>{this.props.question}</span></div>
        <div className="choices">
          {this.createChoices()}
        </div>
      </div>
    )
  }
}
