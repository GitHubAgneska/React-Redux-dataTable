import { PaginationWrapper, PageNumber } from './Pagination_style'

const Pagination = ({totalPages, currentPage, updatePage}) => { 

    return (

        <PaginationWrapper>
            
            {[...Array(totalPages)].map((x, i) =>
                <PageNumber
                    key={Math.random()}
                    currentActivePage={i===currentPage}
                    onClick={()=> updatePage(i)}
                    >{i+1}</PageNumber>
            )}
        
        </PaginationWrapper>
    )
}
export default Pagination
