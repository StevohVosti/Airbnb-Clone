import React, { useState } from 'react'
import './Search.css'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme style file
import { DateRangePicker } from 'react-date-range'
import { MdOutlinePeople } from 'react-icons/md'
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom'


// DATE PICKER
function Search() {

  let history = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection,"
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  return (
    <div className='search'>
      <DateRangePicker ranges={
        [selectionRange]} onChange={handleSelect} />

        <h2>Number of Guest
          <MdOutlinePeople />
        </h2>
        <input min={0} 
        defaultValue={2}
        type='number' />
      <Button onClick={() => history('./search')}>Search Airbnb</Button>
    </div>
  )
}

export default Search