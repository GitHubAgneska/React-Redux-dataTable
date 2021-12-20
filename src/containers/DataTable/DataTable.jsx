import { Fragment } from 'react'
import Pagination from '../../components/Pagination/Pagination'
import SearchBox from '../../components/SearchBox/SearchBox'
import SelectEntriesBox from '../../components/SelectEntriesBox/SelectEntriesBox'

import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  { TableWrapper, StyledTable, StyledTableHeader, TableHeaderIconWrapper, StyledTableRow } from './DataTable_style'


const DataTable = ({collection, sortListBy}) => {

    console.log('DATATABLE RECEIVES COLLECTION =====>', collection)
    const tableHead = [ 'firstName', 'lastName', 'dob', 'startDate', 'street', 'city', 'state', 'zipcode', 'department']
    
    const tableRows = rowData => {
        const { key, index } = rowData
        const tableCell = Object.keys(tableHead)
        const columnData = tableCell.map((keyD, i) => { return <td key={i}>{key[keyD]}</td> })
        return <tr key={index}>{columnData}</tr>
    }

    const tableData = () => { return collection.map((key, index) => { return tableRows({key, index})})}

    const headRow = () => { return (tableHead).map((h, index) => (
        <th key={index}>
            {h}
            <TableHeaderIconWrapper>
                <FontAwesomeIcon icon={faArrowCircleDown} onClick={() => sortListBy(h, false)}/>
                <FontAwesomeIcon icon={faArrowCircleUp} onClick={() => sortListBy(h, true)} />
            </TableHeaderIconWrapper>
        </th>
    ))}


    const entriesOptions = [ 10, 50, 100]
    const currentlyShowing = entries;


    return (
        <Fragment>

            <SelectEntriesBox 
            options={entriesOptions}
            /* selectEntriesAmount={selectEntriesAmount}
            currentlyshowing={entries}
            ListTotal={ListTotal} */
            /> 

            <SearchBox 
            /* handleSearchChange={handleSearchChange}
            handleSearchSubmit={handleSearchSubmit}
            clearInput={clearInput}
            values={searchInputValues}
            suggestions={suggestions}
            selectSuggestion={selectSuggestion}
            handleKeyDown={handleKeyDown} */
            />     

            <table>
                <thead>
                    <tr>
                        {headRow()}
                    </tr>
                </thead>
                <tbody>{tableData()}</tbody>
            </table>
    

            <Pagination
            /* currentPage={currentPage}
            updatePage={changePage}
            totalPages={totalPages}
            total={total} */
            />

        </Fragment>
    )
}
export default DataTable