import React, { PropTypes } from 'react'
import './ButtonContainer.css'
import Button from '../Button'

const ButtonContainer = (props) => {

  const { handleClick } = props
  return (
    <ul className="ButtonContainer">
      <Button value="Clear" className="three-quarts" handleClick={handleClick} />
      <Button value="/" className="operate" handleClick={handleClick} />

      <Button value="7" handleClick={handleClick} />
      <Button value="8" handleClick={handleClick} />
      <Button value="9" handleClick={handleClick} />
      <Button value="*" className="operate" handleClick={handleClick} />

      <Button value="4" handleClick={handleClick} />
      <Button value="5" handleClick={handleClick} />
      <Button value="6" handleClick={handleClick} />
      <Button value="-" className="operate" handleClick={handleClick} />

      <Button value="1" handleClick={handleClick}/>
      <Button value="2" handleClick={handleClick} />
      <Button value="3" handleClick={handleClick} />
      <Button value="+" className="operate" handleClick={handleClick} />

      <Button value="0" className="half" handleClick={handleClick} />
      <Button value="." handleClick={handleClick} />
      <Button value="=" className="operate" handleClick={handleClick} />
    </ul>
  )

}

ButtonContainer.propTypes = {
  handleClick: PropTypes.func.isRequired
}

export default ButtonContainer
