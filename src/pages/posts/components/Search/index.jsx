import React from 'react';
import * as SC from './styles'

export const Search = ({searchTerm, onSearch}) =>
    <SC.Search
        type="text"
        placeholder="Поиск"
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
    />