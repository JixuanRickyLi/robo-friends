import React from 'react';
import Card from "../Card/Card";

/**
 *   created bt Jixuan Li
 *   2020-12-25-16:31
 */


const CardList = (props) => {
    const robots = props.robots;
    return (
        <div>{
            robots.map((user, i) => {
                console.log(user)
                // user maps to the robot item, the second, i maps to the index
                    return <Card
                        key={user.id}
                        id={user.id}
                        name={user.name}
                        email={robots[i].email}/>
                }
            )
        }</div>
    )
}


export default CardList;
