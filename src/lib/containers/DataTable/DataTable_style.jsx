import styled from "styled-components"

export const ComponentWrapper = styled.div`
    height:100vh; width: 90%;
    margin:auto; padding-top: 5%;
`


export const TableWrapper = styled.div`
    display: flex;
    max-height: 90%;
    overflow: scroll;
    border:1px solid grey;
`

export const StyledTable = styled.table` 
    width: 100%;
    tbody { font-size: 0.8rem; }
`

export const StyledTableHeader = styled.thead`
    min-height: 2rem;
    text-transform: uppercase;
    font-size: 0.8em;
    th {
        height: 3.5rem;
        position: sticky; top: 0; 
        color: white; 
        background-color: #888; 
    }
`

export const TableHeaderIconWrapper = styled.div`
    min-height: 1rem;
    
`

export const StyledTableRow = styled.tr`
    height: 2rem;
    
    :nth-child(even) {background-color: #ccc }
    &:hover { background-color: lightblue; color: white;  }
    
    td { 
        width: 10%;
        overflow: hidden;
    }
`

