import React, { Component } from 'react';
import './Calculator.css';
import Display from './Display'
import ButtonContainer from './ButtonContainer'

class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = { computationString: '' }
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.isOperator = this.isOperator.bind(this)
    this.addToComputationString = this.addToComputationString.bind(this)
  }

  handleButtonClick(value) {
    let currentComputation = this.state.computationString

    if (value === 'Clear') {
      this.setState({ computationString: '' })
    } else {
      let updatedComputation = this.addToComputationString(value).toString()
      this.setState({ computationString: updatedComputation })
    }
  }

  isOperator(value) {
    const operators = '*/+=.-'
    return operators.indexOf(value) !== -1
  }

  addToComputationString(value) {
    let currentComputation = this.state.computationString
    // If last two user inputs are operators, replace
    // last operator with current operator (can't use two in a row)
    const previousInput = (currentComputation.length) ? currentComputation.slice(-1) : ' '
    let previouInputIsOperator = this.isOperator(previousInput)

    if (this.isOperator(value) && previouInputIsOperator) {
      if (value === '=') {
        return eval(currentComputation.slice(0, -1))
      } else {
        return currentComputation.slice(0, -1) + value
      }
    }
    // If previous input is not operator, then lets evaluate
    else if (value === '=') {
      return eval(currentComputation)
    }
    else if (currentComputation === 'Infinity') {
      return currentComputation
    }
    else {
      return currentComputation + value
    }
  }

  render() {
    return (
      <div className="Calculator">
        <Display value={this.state.computationString} />
        <ButtonContainer handleClick={this.handleButtonClick}/>
      </div>
    );
  }
}

export default Calculator;
