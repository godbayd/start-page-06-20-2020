import React, {useEffect, useState} from 'react'

// NOTE: grid needs to be remodeled so that cells are ordered 
// to go from top left -> bottom right in ascending order
// 0 8
// 1 9
// 2 10
// 3 11
// 4 12
// 5
// 6
// 7
// alse: data can be stored with some useful extractions that dont need to be computed in every cell, like greatest cell count
// not sure the colors are correct but cellColorIdx is working correctly to get the idx in color range relative to greatest cell count

const graphWidth = 300
const cellSize = graphWidth / Math.floor(368 / 7)


const greatestCount = data => data.sort((a, b) => b[1] - a[1])[0];

const genRanges = (gt, nth) => {
    const frac = Math.floor(gt / nth)
    const ranges = []
    for (let i = 0; i < gt; i+=frac) ranges.push(i);
    return ranges
}




const cellColorIdx = (data, count) => {
    const colorLength = 5
    const gtc = greatestCount(data)[1] // could store this instead
    const ranges = genRanges(gtc, colorLength)
    // console.log(ranges)
    const rangeMinNumOfCount = ranges.find((r, n) => {
        if (n === ranges.length - 1) {
            if (count >= r) return r
        }
        else if (count >= r && count < ranges[n+1]) return r
    })
    // console.log(rangeMinNumOfCount)
    return ranges.indexOf(rangeMinNumOfCount)
}





const Cell = props => {
    const {count, apiData} = props
    return (
        <div 
            className="cell"
            style={{
                backgroundColor: 
                    '#' + ['ebedf0', 'c6e48b', '7bc96f', '239a3b', '196127'][cellColorIdx(apiData, count)],
                width: cellSize,
                height: cellSize,
            }}
        >
        </div>
    )
}




const GithubGraph = props => {
    const {apiData} = props
    // if (apiData.length) console.log(cellColorIdx(apiData, 7))
    return (
        <div 
            id="github-graph"
            style={{
                display: 'grid',
                width: 200,
                gridTemplateColumns: 'repeat(52, 1fr)',
                gridTemplateRows: 'repeat(7, 1fr)'
            }}
        >
            {
                apiData.map((dataArr, n) => {
                    return (
                        <Cell 
                            {...props}
                            date={dataArr[0]}
                            count={dataArr[1]}
                            key={'github-graph-cell' + n}
                        />
                    )
                })
            }
        </div>
    )
}

export default GithubGraph
