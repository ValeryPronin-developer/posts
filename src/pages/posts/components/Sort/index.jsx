import React from 'react';
import * as SC from './styles'

export const Sort = ({ sortOrder, onSortChange }) =>
    <SC.Sort value={sortOrder} onChange={(e) => onSortChange(e.target.value)}>
        <option value="asc">По названию (A-Z)</option>
        <option value="desc">По названию (Z-A)</option>
    </SC.Sort>