import React, {useState, useEffect} from 'react';  // useState (state Hook) useEffect (lifeCycle Hook)  ---- Hook
import {robots} from '../../Components/Card/robots';
import CardList from "../../Components/CardList/CardList";
import SearchBox from "../../Components/SearchBox/SearchBox";
import './App.css'
import ErrorBoundry from "../../Components/ErrorBoundry/ErrorBoundry";
import Scroll from "../../Components/Scroll/Scroll";
/**
 *   created bt Jixuan Li
 *   2020-12-25-16:47
 */

function App () {

    // ------State Hook ---------
    // robots is the state, and setRobots is the function that changes this state, in useState, the default state.
    // array destructure....
    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState('');
    const [count, setCount] = useState(0);

    //-------life cycle hook-------
    useEffect(() => {
        const temp =   {
            id: 113,
            name: 'Steve Rroboto',
            username: 'S_roboto',
            email: 'Steve.Roboto@kssv.biz'
        }
        fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then( users => setRobots(users.concat(temp)))
        },
        // Optional State, tells react: run this effect when XXX changes,
        // if we give an empty list, it means, run this when nothing changes ==> ComponentDidMount
        // aka just once after changes
        []
        )

    const onSearchChange = (event) => {
        // don't need to set the entire state, just set SearchField  OOOOOOYEEEAAA
        setSearchField( event.target.value)
    }

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return  !robots.length  ?
        <h1>Loading...</h1> :
        <div className='tc'>
            <h1 className='f2-l'>ROBOFRIENDS</h1>
            <button onClick={() => setCount(count+1)}>Click Me</button>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
                <ErrorBoundry>
                    <CardList robots={filteredRobots}/>
                </ErrorBoundry>
            </Scroll>
        </div>

}

export default App;
