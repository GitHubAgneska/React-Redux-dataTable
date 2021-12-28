import { client } from './api/client'
import { makeServer } from './api/client'

import Button from './components/Button/Button'
import Pagination from './components/Pagination/Pagination'
import SearchBox from './components/SearchBox/SearchBox'
import SelectEntries from './components/SelectEntries/SelectEntries'
import Table from './components/Table/Table'

import DataTable from './containers/DataTable/DataTable'

import { departments } from './data/departments'
import { states } from  './data/us-states'

import { GlobalStyle } from './style/global_style'

import { searchSuggestions } from './utils/searchText'


export { client, makeServer, Button, Pagination, SearchBox, SelectEntries, Table, DataTable, departments, states, GlobalStyle, searchSuggestions  }
