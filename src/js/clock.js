import React, {useState, useEffect} from 'react'

const formatHours = h => h > 12 ? h - 12 : h === 0 ? 12 : h
const prefixZero = x => x < 10 ? `0${x}` : x

const Clock = props => {
    let d = new Date()

    const [timeState, setTimeState] = useState({
        h: formatHours(d.getHours()), 
        m: prefixZero(d.getMinutes()), 
        s: prefixZero(d.getSeconds())
    })

    useEffect(() => {
        const timer = setInterval(() => {
            d = new Date()
            setTimeState({
                h: formatHours(d.getHours()), 
                m: prefixZero(d.getMinutes()), 
                s: prefixZero(d.getSeconds())
            })
        }, 1000)

        // console.log(timeState)
        return () => clearTimeout(timer)
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
                <div style={{fontSize: 13}}>
                    {`${timeState.s}`}
                </div>
            </div>
        </div>
    )
}

export default Clock
