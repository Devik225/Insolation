import React from 'react'
import '../ComponentsCSS/Search.css'

function Search(props) {
  return (
    <div className='search'>
        <div className='searchLabel' >{props.label}</div>
        <input className='searchBox' type={'text'}></input>
    </div>
  )
}

export default Search