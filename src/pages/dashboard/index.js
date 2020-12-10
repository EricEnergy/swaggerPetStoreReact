import React, { useState, useEffect, Fragment } from "react";
import Navbar from '../../components/Navbar';
import "./style.css";
import { getInventory, updatePet } from '../../services/axios';
import { Button, Table } from 'react-bootstrap';

function Dashboard() {
    const [inventoryList, setInventoryList] = useState();
    const [loading, setLoading] = useState(true);

    // Start up function which calls the API and sets data into state
    // Line 15 I send "available" in case we want to see "pending", or "sold" later on
    useEffect(() => {
        async function init() {
            const inventory = await getInventory("available");
            await setInventoryList(inventory.data);
            setLoading(false);
        };
        init();
    }, []);

    //Render table rows plus store index number in a data custom attribute 
    //Line 30 Check if category is available then check if data.category.name (new feature es8)
    const renderTable = () => {
        return inventoryList.map((data, index) => {
            return <tr key={index}>
                <td>{index}</td>
                {/* <td>{data.id}</td> */}
                <td ><p className="truncate">{data.name ? data.name : "N/A"}</p></td>
                <td>{data.category?.name ? data.category.name : "N/A"}</td>
                <td>{data.status}</td>
                <td><Button data-id={index} variant={data.status === "available" ? "primary" : "secondary"} disabled={data.status === "available" ? false : true} onClick={onButtonChange}>{data.status === "available" ? "Purchase" : "Purchased"}</Button></td>
            </tr>
        })
    };

    //Onclick event to purchase
    const onButtonChange = async (e) => {
        const newInventoryList = [...inventoryList];
        const id = parseInt(e.target.dataset.id);
        const item = await newInventoryList.find((item, index) => index === id);
        item.status = "sold";
        const updatePetInfo = await updatePet(item)
        console.log(updatePetInfo)
        setInventoryList(newInventoryList);
    };

    return (
        <Fragment>
            <Navbar location={"dashboard1"} />
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
                    {loading ? "Loading..." : renderTable()}
                </tbody>
            </Table>
        </Fragment>
    );
};

export default Dashboard;