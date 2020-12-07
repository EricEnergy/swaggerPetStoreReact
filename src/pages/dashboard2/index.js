import React, { Fragment, Component } from "react";
import "./style.css";
import { getInventory } from '../../services/axios';
import { Button, Table } from 'react-bootstrap';

class Dashboard2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inventoryList: {},
            loading: true
        };
    };

    // Start up function which calls the API and sets data into state
    // Line 18 I send "available" in case we want to see "pending", or "sold" later on
    componentDidMount() {
        getInventory("available")
            .then((resp) => resp.data)
            .then((data) => {
                this.setState({ inventoryList: data });
                this.setState({ loading: false });
            });
    };

    //Render table rows
    //Line 34 Check if category is available then check if data.category.name (new feature es8) There was an id as well so I went with the name for the category
    renderTable = () => {
        return this.state.inventoryList.map((data, index) => {
            return <tr>
                <td>{index}</td>
                {/* <td>{data.id}</td> */}
                <td>{data.name ? data.name : "N/A"}</td>
                <td>{data.category?.name ? data.category.name : "N/A"}</td>
                <td>{data.status}</td>
                <td><Button data-id={index} variant={data.status === "available" ? "primary" : "secondary"} onClick={this.onButtonChange}>{data.status === "available" ? "Purchase" : "Sold"}</Button></td>
            </tr>
        })
    };

    //Onclick event for purchasing
    onButtonChange = (e) => {
        const newInventoryList = [...this.state.inventoryList];
        const id = parseInt(e.target.dataset.id);
        const item = newInventoryList.find((item, index) => index === id);
        item.status = "sold";

        this.setState({ inventoryList: newInventoryList });
    };
    
    render() {
        return (
            <Fragment>
            <h4 className="text-center">Class Component </h4>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Index</th>
                            {/* <th>ID</th> */}
                            <th>Name</th>
                            <th>Catagory</th>
                            <th>Status</th>
                            <th>Button</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.loading ? "Loading..." : this.renderTable()}
                    </tbody>
                </Table>
            </Fragment>
        );
    };
};

export default Dashboard2;