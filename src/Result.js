import React, { Component } from 'react';
import PropTypes from 'prop-types';
import joe from './joe.jpg';

export default class Result extends Component {
    
    static propTypes = {
        queryString:PropTypes.string,
        qb:PropTypes.array
    }

    result = () => {
        var correctAnswers = 0;
        if (this.props.queryString==="") {
            return <div></div>
        }
        else { 
            // Handles the logic for the query string
            let arr = this.props.queryString.split("=");
            for (let i = 1; i< arr.length; i++) {
                //console.log(arr[i].charAt(0));
                //console.log(this.props.qb[i-1]["answer"]);
                if (parseInt(arr[i].charAt(0)) === this.props.qb[i-1]["answer"]){
                    correctAnswers+=1;
                }
            }
            let correct = <span>Score: {correctAnswers*5}%</span>;
            if (correctAnswers>13) {
                return <div>
                    {correct}
                    <br></br><br></br>
                    <img src={joe}
                    alt="Best-Professor"/>
                    <div>YOU SAVED JOE!</div>
                </div>
            }
            else
                return <div>{correct} <br></br> Joe is a faceless blob and he must scream :c</div>
        }
    }

  render() {
    return (
      <div>
        {this.result()}
      </div>
    )
  }
}
