import React, { PropTypes } from 'react';
import './Display.css';

const Display = (props) => {

  const { value } = props
  return (
    <div className="Display">
      {value}
    </div>
  )
}

Display.propTypes = {
  value: PropTypes.string
}

export default Display
