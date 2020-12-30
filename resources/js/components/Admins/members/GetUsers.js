import React, { Component } from "react";
import { deleteUsers, getUser, handlePage } from "./functions";
import { Link } from "react-router-dom";
import "../../../../css/admins/items.css";
import Pagination from "react-js-pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class GetUsers extends Component {
    state = {
        users: [],
        activePage: 1,
        itemsCountPerPage: 1,
        totalItemsCount: 1,
        pageRangeDisplayed: 3
    };

    componentDidMount() {
        getUser().then(res => {
            this.setState({
                users: res.data.users.data,
                activePage: res.data.users.current_page,
                itemsCountPerPage: res.data.users.per_page,
                totalItemsCount: res.data.users.total
            });
        });
    }

    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.handlePage(pageNumber).then(res => {
            this.setState({
                users: res.data.users.data,
                activePage: res.data.users.current_page,
                itemsCountPerPage: res.data.users.per_page,
                totalItemsCount: res.data.users.total
            });
        });
    }
    delete = id => {
        deleteUsers(id).then(res => {
            let items = this.state.items;
            for (let index = 0; index < items.length; index++) {
                if (items[index].id == id) {
                    items.splice(index, 1);
                    this.setState({
                        users
                    });
                }
            }
        });
    };

    render() {
        return (
            <div>
                <Link className="btn btn-info add_btn" to="/add/user">
                    <FontAwesomeIcon icon='plus-square' className='icon' />
                    Add user
                </Link>
                <table class="table table-striped">
                    <thead className="bg-info">
                        <tr>
                            <th scope="col">user ID</th>
                            <th scope="col">name</th>
                            <th scope="col">email</th>
                            <th scope="col">date</th>
                            <th scope="col">control</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map(user => {
                            return (
                                <tr key={user.id}>
                                    <th scope="row">1</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.date} </td>
                                    <td>
                                        <Link
                                            className="btn btn-info"
                                            to={"/edit/user" + user.id}
                                        >
                                        <FontAwesomeIcon icon='edit' className='icon' />
                                            Edit user
                                        </Link>{" "}
                                        <button
                                            className="btn btn-danger delete_btn"
                                            onClick={() => this.delete(item.id)}
                                        >
                                            <FontAwesomeIcon icon='trash' className='icon' />
                                            delete
                                        </button>{" "}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <div className='d-flex justify-content-center'>
                    <Pagination
                        activePage={this.state.activePage}
                        itemsCountPerPage={this.state.itemsCountPerPage}
                        totalItemsCount={this.state.totalItemsCount}
                        pageRangeDisplayed={3}
                        onChange={this.handlePageChange.bind(this)}
                        itemClass="page-item"
                        linkClass="page-link"
                    />
                </div>
            </div>
        );
    }
}

export default GetUsers;
