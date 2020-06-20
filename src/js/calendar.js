import React from 'react'
import dayjs from 'dayjs'

var duration = require('dayjs/plugin/duration')
dayjs.extend(duration)

const weekDayName = () => [
    'sunday', 'monday', 'tuesday',  'wednesday',
    'thursday', 'friday', 'saturday'
][dayjs().day()];

const monthName = () => [
    'january', 'february', 'march', 
    'april', 'may', 'june', 'july',
    'august', 'september', 'october',
    'november', 'december'
][dayjs().month()];

const year = dayjs().year()

const firstDayOfMonthIdx = dayjs().date(1).day()
const daysInMonth = dayjs().daysInMonth()

const dayNameGridNumbersArr = () => {
    let j = 0
    const arr = []
    for (let i = 0; i < firstDayOfMonthIdx; i++) {
        arr.push('')
        j++
    }
    for (let i = 1; i <= daysInMonth; i++) {
        arr.push(i)
        j++
    }
    const rest = 35 - j
    for (let i = 0; i < rest; i++) {
        arr.push('')
    }
    return arr
}


const DayNameGrid = () => {
    const wdLetters = ['s', 'm', 't', 'w', 't', 'f', 's'];
    return (
        <div id="day-name-grid">
            {
               wdLetters.map((l, n) => {
                    return (
                        <div 
                            className="cell"
                            key={'day-name-grid-'+n}
                        >
                            {l}
                        </div>
                    )
                })
            }
        </div>
    )
}

const NumCell = props => {
    const {num} = props
    const dayNumOfMonth = dayjs().date()
    const highlight = dayNumOfMonth === num ? ' highlight' : ''
    return (
        <div 
            className={"cell"+highlight}
        >
            {num ? num : ''}
        </div>
    )
}

const NumbersGrid = props => {
    const numbersArr = dayNameGridNumbersArr()
    return (
        <div id="calendar-numbers-grid">
            {
                numbersArr.map((num, n) => {
                    return (
                        <NumCell 
                            num={num}
                            key={'cal-num-grid-' + n}
                        />
                    )
                })
            }
        </div>
    )
}

const Calendar = props => {
    return (
        <div id="calendar">
            <h2>{monthName()}</h2>
            <h2>{year}</h2>
            <DayNameGrid /> 
            <NumbersGrid />
        </div>
    )
}

export default Calendar
