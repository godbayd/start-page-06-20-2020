import React, {useState, useEffect} from 'react'

const formatHours = h => h > 12 ? h - 12 : h === 0 ? 12 : h
const prefixZero = x => x < 10 ? `0${x}` : x
const getMeridianPos = h => h >= 12 ? 'pm' : 'am'

const Clock = props => {
    let d = new Date()

    const [timeState, setTimeState] = useState({
        h: formatHours(d.getHours()), 
        m: prefixZero(d.getMinutes()), 
        s: prefixZero(d.getSeconds()),
        meridianPos: getMeridianPos(d.getHours())
    })

    useEffect(() => {
        const timer = setInterval(() => {
            d = new Date()
            setTimeState({
                h: formatHours(d.getHours()), 
                m: prefixZero(d.getMinutes()), 
                s: prefixZero(d.getSeconds()),
                meridianPos: getMeridianPos(d.getHours())
            })
        }, 1000)

        // console.log(timeState)
        return () => clearTimeout(timer) // see clean up in react effects
    }) 

    return (
        <div id="clock">
            <div 
                style={{
                    display: 'flex',
                    alignItems: 'flex-end'
                }}
            >
                <div style={{fontSize: 25}}>
                    {`${timeState.h}:${timeState.m}`}
                </div>
                <div style={{fontSize: 13, margin: '0px 5px 2px 5px'}}>
                    {`${timeState.s}`}
                </div>
                <div style={{marginBottom: 2}}>
                    {timeState.meridianPos}
                </div>
            </div>
        </div>
    )
}

export default Clock
