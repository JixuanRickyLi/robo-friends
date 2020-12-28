import React, {Component} from 'react';  // useState (state Hook) useEffect (lifeCycle Hook)  ---- Hook
import {robots} from '../../Components/Card/robots';
import CardList from "../../Components/CardList/CardList";
import SearchBox from "../../Components/SearchBox/SearchBox";
import './App.css'
import ErrorBoundry from "../../Components/ErrorBoundry/ErrorBoundry";
import Scroll from "../../Components/Scroll/Scroll";

import { connect } from 'react-redux'
import {requestRobots, setSearchField} from "./actions";


/**
 *   created bt Jixuan Li
 *   2020-12-25-16:47
 */

//tell react what does it need to care about, using at the end
const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component {

    componentDidMount() {
        this.props.onRequestRobots()
    }

    render() {
        const {searchField, onSearchChange, robots, isPending} = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return isPending ?
            <h1>Loading...</h1> :
            <div className='tc'>
                <h1 className='f2-l'>ROBOFRIENDS</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
    }


}

//connect --- higher order function, it returns another function, and App is the parameter of connect()
//subscribe any changes in Redux store
export default connect(mapStateToProps, mapDispatchToProps)(App);
