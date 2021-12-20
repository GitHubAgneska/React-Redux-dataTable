import styled from 'styled-components'

export const StyledBtn = styled.button` 
    display: block;
    padding: 8px;
    font-size: 1.1rem;
    font-weight: bold;
    margin-top: 1rem;
    color: #fff;
    border-radius: 5px;
    width: ${props => props.width ? props.width : '100%'}
`