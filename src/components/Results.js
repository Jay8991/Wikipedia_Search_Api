import React from 'react'

export const Results = (props) => {
    const result = props.r
    return (
        <div className='container'>
            <li className="list-group-item m-3">
                <div>
                    <a href={`https://en.wikipedia.org?curid=${result.pageid}`} target="_blank">{result.title}</a>
                    <p className='mt-2' dangerouslySetInnerHTML={{__html: result.snippet}}></p>
                </div>
            </li>
        </div>
    )
}
