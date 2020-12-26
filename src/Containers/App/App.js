import React, {Component} from 'react';
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
class App extends Component {

    constructor() {
        super();
        // have state => smart component
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    //called after render
    //fetch the API content
    componentDidMount() {
        const temp =   {
            id: 113,
            name: 'Steve Rroboto',
            username: 'S_roboto',
            email: 'Steve.Roboto@kssv.biz'
        }
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then( users => {

                this.setState({robots: users.concat(temp)})
            })
    }

// binding free function writing
    onSearchChange = (event) => {
        this.setState({searchField : event.target.value})
    }

    render() {
        const {searchField, robots} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return  !robots.length  ?
            <h1>Loading...</h1> :
            <div className='tc'>
                <h1 className='f2-l'>ROBOFRIENDS</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>


    }

}

export default App;
