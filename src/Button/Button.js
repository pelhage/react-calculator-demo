import React, { PropTypes } from 'react';
import './Button.css';

const Button = (props)  => {
  let { value, handleClick, className } = props
  let buttonClass = (className) ? "Button " + className : "Button"

  return (
    <li
      className={buttonClass}
      onClick={() => { handleClick(value)} }>
      {value}
    </li>
  )
}


Button.propTypes = {
  value: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  className: PropTypes.string
}

export default Button
