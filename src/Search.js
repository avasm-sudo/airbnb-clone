import React, {useState} from 'react';
import './Search.css';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Datepicker } from '@mobiscroll/react';
import { Button } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";
import { useHistory } from "react-router-dom";

// DATE PICKER COMPONENT
    function Search() {
        const history = useHistory();
        const [startDate, setStartDate] = useState(new Date());
        const [endDate, setEndDate] = useState(new Date());
    
        const selectionRange = {
            startDate: startDate,
            endDate: endDate,
            key: "selection",
          };
    
        function handleSelect(ranges) {
            setStartDate(ranges.selection.startDate);
            setEndDate(ranges.selection.endDate);
        }    

    return (
            <div className='search'>        
        <Datepicker
            theme="ios" 
            themeVariant="light"
            controls={['calendar']}
            display="inline"
            rangeSelectMode="wizard"
            select="range"
            showRangeLabels={true}
            />            
            <h2> Number of guests <PeopleIcon />
            </h2>
            <input min={0} defaultValue={2} type="number" />
            <Button onClick={() => history.push('/search')}>Search Airbnb</Button>
        </div>
    
        

    )
}

export default Search ;
