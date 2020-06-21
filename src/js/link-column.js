import React from 'react'


const LinkColumn = props => {
    const {name:categoryName, links} = props.catObj
    return (
        <ul>
            <h3>{categoryName}</h3>
            {
                links.map((linkObj, n) => {
                    const {name, url} = linkObj
                    return (
                        <li key={'col-link-' + n}>
                            <a href={url} target="_blank">{name}</a>
                        </li>
                    )
                })
            }
        </ul>
    )
}


const LinkColumnsContainer = props => {
    const {linkColumnsModel} = props
    const linkCategories = Object.keys(linkColumnsModel)
    return (
        <div 
            id="link-columns-container"
        >
            {
                linkCategories.map((catKey, n)=> {
                    const catObj = linkColumnsModel[catKey]
                    return (
                        <LinkColumn 
                            catObj={catObj} 
                            key={'link-col-'+n}
                        />
                    )
                })
            }
        </div>
    )
}

export default LinkColumnsContainer
