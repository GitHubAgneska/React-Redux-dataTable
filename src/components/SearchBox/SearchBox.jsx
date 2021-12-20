import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes} from "@fortawesome/free-solid-svg-icons";
import { SearchSectionWrapper, SearchBoxWrapper, SearchBoxInput, SearchSuggestionsWrapper } from './SearchBox_style'

const SearchBox = ({values, handleSearchChange, clearInput, handleSearchSubmit, suggestions, selectSuggestion, handleKeyDown} ) => {

    const suggestionsBoxIsActive = suggestions && suggestions.size > 0
    const [ suggBoxVisible, setSuggBoxVisible ] = useState(suggestionsBoxIsActive)

    return (
        <SearchSectionWrapper>
            <SearchBoxWrapper suggestionsBoxIsActive={suggestionsBoxIsActive}>
                
                <SearchBoxInput 
                    type="text"
                    placeholder="search"
                    values={values}
                    onChange={e => handleSearchChange(e)}
                    onKeyDown={e => handleKeyDown(e)}
                />
                <FontAwesomeIcon icon={faTimes} onClick={() => clearInput()} />
                <FontAwesomeIcon icon={faSearch} onClick={() => handleSearchSubmit()} />
                
            </SearchBoxWrapper>

            { suggestions && suggestions.size > 0 && 
                <SearchSuggestionsWrapper>
                    <ul>
                        { [...suggestions.keys()].map( s => (  <li key={Math.random()} onClick={()=> selectSuggestion(s)}>{s}</li> )) }
                    </ul>
                </SearchSuggestionsWrapper>
            }

        </SearchSectionWrapper>
    )
}
export default SearchBox
