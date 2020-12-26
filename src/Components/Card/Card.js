import React from 'react'
/**
 *   created bt Jixuan Li
 *   2020-12-25-16:08
 */

const Card = (props) => {
    const {id, name, email} = props;
    return(
        <div className='bg-light-green tc dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt = {'robot photo'} src = {`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;
