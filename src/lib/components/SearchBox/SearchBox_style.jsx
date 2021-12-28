import styled from "styled-components"


export const SearchSectionWrapper = styled.section`
    margin-bottom: 2%;
`


export const SearchBoxWrapper = styled.div`
    width: 100%;
    border: 3px solid #ccc;
    display: inline-flex;
    margin-top: 2%;
    align-items: center;
    svg { margin: 1%; }
    

    ${({ suggestionsBoxIsActive }) => suggestionsBoxIsActive && 
        `border-top-right-radius: 15px;
        border-top-left-radius: 15px; `}
    
    ${({ suggestionsBoxIsActive }) => !suggestionsBoxIsActive && 
        `border-radius: 15px `}

`

export const SearchBoxInput = styled.input`
    width: 95%; height: 25px;
    border: none !important;
    outline: none;
    border-radius: 15px;
    padding: 0px 5px;
    ::placeholder { font-weight: light; opacity: 0.8; }
`

export const SearchSuggestionsWrapper = styled.div`
    
    border: 2px solid #ccc;
    text-align: justify;
    margin-bottom: 2%;
    color: #888;
    ul {
        li { 
            min-height: 2rem;
            display: flex;
            align-items: center;
            padding: 1%;
            font-size: 0.8rem;
            &:hover { background-color: #ccc; color:white; }
        }
        li:not(:first-child) { border-top: 1px solid #ccc; }
    }

    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;

`
