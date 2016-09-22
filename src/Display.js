import React, { Component, PropTypes } from 'react';
import './Display.css';

class Display extends Component {

  render() {
    const { value } = this.props
    return (
      <div className="Display">
        {value}
      </div>
    )
  }
}


Display.propTypes = {
  value: PropTypes.string
}

export default Display
