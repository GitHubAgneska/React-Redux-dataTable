import PropTypes from "prop-types"
import TableHeader from './Table-header'
import { TableWrapper, StyledTableHeader, StyledTable, StyledTableRow } from './Table_style'
import moment from 'moment'
import { useSelector } from 'react-redux'

const Table = ({currentPageToDisplay, sortListBy}) => {

    const currentQuery = useSelector(initialState => initialState.list.searchTerm)

    const tableHead = [ 'firstName', 'lastName', 'dob', 'startDate', 'street', 'city', 'state', 'zipcode', 'department']

    const tableRow = employee => {
        const { key, value } = employee
        const tableCell = [...tableHead]
        
        const columnData = tableCell.map( prop => {
            let valueToDisplay
            if ( key[prop].hasOwnProperty('name') ) { valueToDisplay = key[prop]['name'] }
            else if ( prop === 'dob' || prop ==='startDate') { valueToDisplay = moment(key[prop]).format('MM/DD/YY') }
            else { valueToDisplay = key[prop] }
            let match = false;
            if (currentQuery.length > 4 && valueToDisplay.toLowerCase().includes(currentQuery)  ) { match=true }

            return (<td key={Math.random()} style={{backgroundColor:match?'yellow':'none'}} >{valueToDisplay}</td>) 
        })        
        return (<StyledTableRow key={Math.random()}>{columnData}</StyledTableRow>)
    }

    const tableData = () => { return currentPageToDisplay.map((key, index) => tableRow({key, index}))  }

    return (
        <TableWrapper>
            <StyledTable>
                <StyledTableHeader>
                    <TableHeader sortListBy={sortListBy}/>
                </StyledTableHeader>
                <tbody>{tableData()}</tbody>    
            </StyledTable>
        </TableWrapper>
    )
}

export default Table

Table.propTypes = {
    currentPageToDisplay: PropTypes.array.isRequired,
    sortListBy: PropTypes.func.isRequired,
}