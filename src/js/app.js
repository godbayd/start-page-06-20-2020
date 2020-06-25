import React, {useEffect, useState} from 'react'
import Calendar from './calendar'
import Clock from './clock'
import LinkColumnsContainer from './link-column'
import GithubGraph from './github-graph'

const linkColModel = {
    entertainment: {
        name: 'entertainment',
        links: [
            {
                name: 'Netflix',
                url: 'https://netflix.com'
            },
            {
                name: 'Hulu',
                url: 'https://hulu.com'
            },
            {
                name: 'Vudu',
                url: 'https://vudu.com'
            },
            {
                name: 'Youtube',
                url: 'https://youtube.com'
            }
        ]
    },
    work: {
        name: 'work',
        links: [
            {
                name: 'Codepen',
                url: 'https://codepen.io'
            },
            {
                name: 'JS Bin',
                url: 'https://jsbin.com'
            },
            {
                name: 'Code Sandbox',
                url: 'https://codesandbox.com'
            },
        ]
    },
    socialMedia: {
        name: 'social media',
        links: [
            {
                name: 'Reddit',
                url: 'https://reddit.com'
            },
            {
                name: 'Facebook',
                url: 'https://facebook.com'
            },
            {
                name: 'Instagram',
                url: 'https://instagram.com'
            },
        ]
    }
}


// fetch('http://localhost:8000/api')
//     .then(d => d.json())
//     .then(d => console.log(d))

const App = () => {
    const [apiData, setApiData] = useState([])
    useEffect(() => {
        fetch('/api') //  this works because of proxy
            .then(d => d.json())
            .then(data => {
                // console.log(data.map(a => a[1]))
                setApiData(data)
            })
    }, [])    
    return (
        <div id="app">
            <GithubGraph 
                apiData={apiData}
            />
            <LinkColumnsContainer 
                linkColumnsModel={linkColModel}
            />
            <Clock />
            <Calendar />
        </div>
    )
}

export default App
