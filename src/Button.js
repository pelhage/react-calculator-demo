import React, { Component, PropTypes } from 'react';
import './Button.css';

class Button extends Component {

  render() {
    let { value, handleClick, className } = this.props
    let buttonClass = (className) ? "Button " + className : "Button"
    return (
      <li
        className={buttonClass}
        onClick={() => {
          console.log('I clicked a button');
          handleClick(value)
        } }>
        {value}
      </li>
    )
  }
}


Button.propTypes = {
  value: PropTypes.string
}

export default Button
