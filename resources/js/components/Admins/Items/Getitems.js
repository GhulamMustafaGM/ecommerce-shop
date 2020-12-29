import React, { Component } from "react";
import { getitems } from "./functions";
import { Link } from "react-router-dom";
import '../../../../css/admins/items.css'

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
            <div>
                <Link className="btn btn-info add_btn" to="/add/item">Add item</Link>
                <table class="table table-striped">
                    <thead className="bg-info">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">name</th>
                            <th scope="col">description</th>
                            <th scope="col">status</th>
                            <th scope="col">control</th>
                        </tr>
                    </thead>
                <tbody>
                    {this.state.items.map(item=> {
                        return (
                    <tr key= { item.id }>
                        <th scope="row">1</th>
                        <td>{ item.name }</td>
                        <td>{ item.description }</td>
                        <td>{ item.status == 1 ? <span>new</span> : null }</td>
                        <td>{ item.status == 2 ? <span>used</span> : null }</td>
                        <td><Link className='btn btn-info' to={'/edit/item' +item.id }>Edit item</Link></td>
                    </tr>
                        )
                    })}
                    
                </tbody>
            </table>
        </div>
        );
    }
}

export default Getitems;