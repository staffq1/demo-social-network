import React, {useState} from 'react';
import classes from './Paginator.module.css'

let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChaged, portionSize = 10}) => {

    let pageCount = Math.ceil(totalUsersCount / pageSize)

    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pageCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return <div>
        { portionNumber > 1 &&
        <button onClick={() => { setPortionNumber(portionNumber - 1) }}>{'<'}</button> }

        {pages
            .filter(p => p >= leftPortionPageNumber && p<= rightPortionPageNumber)
            .map((p, index) => {
            return <span key={index} className={currentPage === p ? classes.selectedPage : ''}
                onClick={(e) => onPageChaged(p)}>{p}</span>
        })}
        { portionCount > portionNumber &&
            <button onClick={() => { setPortionNumber(portionNumber + 1) }}>{'>'}</button> }
    </div>
}

export default Paginator