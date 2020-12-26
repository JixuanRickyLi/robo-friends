import React from 'react';
/**
 *   created bt Jixuan Li
 *   2020-12-25-16:56
 */

const SearchBox = ({searchField, searchChange}) => {
    return (
        <div className='pa2'>
            <input
                className='pa3 ba b--green bg-lightest-blue'
                type = 'search'
                placeholder='Search Robots'
                onChange ={searchChange}
            />
        </div>

    )
}
export default SearchBox;
