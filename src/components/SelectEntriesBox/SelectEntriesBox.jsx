import { SelectEntriesBoxWrapper } from './SelectEntriesBox_style'

const SelectEntriesBox = ({options, selectEntriesAmount, currentlyshowing, ListTotal}) => {
    return (
        <SelectEntriesBoxWrapper>

            <label htmlFor="entries">Show per page:</label>
            <select 
                options={options}
                name="entries"
                aria-required="true">
                { options.map(o => (
                    <option key={Math.random()} onClick={() => {selectEntriesAmount(o)}}>{o}</option>
                ))}
            </select>

            <div currentlyshowing={currentlyshowing}>Showing: {currentlyshowing} of {ListTotal}</div>
        </SelectEntriesBoxWrapper>
    )
}

export default SelectEntriesBox