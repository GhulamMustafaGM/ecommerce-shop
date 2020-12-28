import React, { Component } from 'react';
import { getitems } from './functions';

class Getitems extends Component {
    state = { 
        items:[]
        }

        componentDidMount() {
            getitems().then(res=> {
                this.setState({
                    items: res.data.items
                })
            })
        }

    render() {
        return (
            
        );
    }
}

export default Getitems;
