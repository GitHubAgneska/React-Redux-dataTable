import styled from "styled-components"

export const PaginationWrapper = styled.div`
    width: 80%; margin: auto;
    display: flex; flex-flow: row nowrap;
    justify-content: center;
`

export const PageNumber = styled.div`
    font-size:1.5rem;
    height:2rem; width: 2rem;margin: 1%;
    background-color: lightgray;
    display: flex; justify-content: center; align-content:center;
    border-radius: 50%;
    ${ ({currentActivePage}) => currentActivePage && 'border:1px solid red'}
`

export const Paginated =  styled.div`
    width: 80%; border: 1px solid red;
`
