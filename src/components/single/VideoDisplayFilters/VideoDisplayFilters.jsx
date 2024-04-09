import { useRef, useState } from 'react';
import Styles from './VideoDisplayFilters.module.css';

function VideoDisplayFilters() {

    const filterTypeRef = useRef(null);
    const [filterType, setFilterType] = useState("mostPopular");

    function displayByFilter(displayType) {
        console.log(displayType);
    }

    // The value might be different between 2 renders, but remains a constant inside 
    // the render itself and inside any closures (functions that live longer even after 
    // render is finished, e.g. useEffect, event handlers, inside any Promise or setTimeout).
    function sortByFilter(event) {
        setFilterType(event.target.value);
        console.log(filterTypeRef.current.value);
    }

    return (
        <>
            <div className={Styles.videoDisplayFilters}>
                <button className={Styles.diplayFilterButtonList} onClick={() => displayByFilter("list")}></button>
                <button className={Styles.diplayFilterButtonGrid} onClick={() => displayByFilter("grid")}></button>
                <select className={Styles.dropdownFilters} name="dropdownFilters" onChange={sortByFilter} ref={filterTypeRef}>
                    <option className={Styles.dropdownFilter} value="mostPopular">Most Popular</option>
                    <option className={Styles.dropdownFilter} value="mostViews">Most Views</option>
                    <option className={Styles.dropdownFilter} value="mostRecent">Most Recent</option>
                    <option className={Styles.dropdownFilter} value="oldest">Oldest</option>
                </select>
            </div>
        </>
        
    )
}

export default VideoDisplayFilters;