import PropTypes from "prop-types"
import { StyledBtn } from './Button-style'

const Button = ({ btnName, handleClick, disabled, width } ) => { 

    return ( 
        <StyledBtn onClick={(e)=>handleClick(e)} disabled={disabled} width={width}>{btnName}</StyledBtn>
    )
}

export default Button

Button.propTypes = { 
    btnName: PropTypes.string.isRequired,
    // handleClick: PropTypes.func.isRequired
}
