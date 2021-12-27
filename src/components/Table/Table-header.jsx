import { Fragment } from "react"
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TableHeaderCell, TableHeaderIconWrapper } from './Table_style'

let headers = [ 'firstName', 'lastName', 'dob', 'startDate', 'street', 'city', 'state', 'zipcode', 'department']

const TableHeader = ( { sortListBy } ) => { 

    return (
        <Fragment>
            <tr>
                { headers.map(h => (
                    <th key={Math.random()}>
                        {h}
                        <TableHeaderIconWrapper>
                            <FontAwesomeIcon icon={faArrowCircleDown} onClick={() => sortListBy(h, false)}/>
                            <FontAwesomeIcon icon={faArrowCircleUp} onClick={() => sortListBy(h, true)} />
                        </TableHeaderIconWrapper>
                    </th>
                ))}
            </tr>
        </Fragment>
    )
}
export default TableHeader