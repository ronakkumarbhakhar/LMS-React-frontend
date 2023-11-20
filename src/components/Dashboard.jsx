import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import "../css/about.css"
import AddClothes from './AddClothes'
import { SERVER_URL } from '../constants'

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
const Dashboard = () => {

    const getClothes = (clothes) => {
        return (
            <tr>
                <td >{clothes.serialNo}</td>
                <td >{clothes.collectedOn}</td>
                <td >{clothes.shirt}</td>
                <td >{clothes.pent}</td>
                <td >{clothes.tShirt}</td>
                <td >{clothes.lower}</td>
                <td >{clothes.shorts}</td>
                <td >{clothes.towel}</td>
                <td >{clothes.pillowCover}</td>
                <td >{clothes.bedSheet}</td>
                <td>-</td>
            </tr>
        )
    }

    const navigate = useNavigate();

    const [userData, setUserData] = useState({});

    useEffect(() => {
        const config = { withCredentials: true }
        axios.get(`${SERVER_URL}/getData`, config)
            .then((result) => {
                setUserData(result.data);
                console.log(result.data);

            }).catch((err) => {
                console.log(err);
                navigate("/login");
            });
    }, []);


    return (
        <>
            <div className="container-main">
                <div className="table-profile">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="profile-head mt-3">
                                <div className="table">
                                    <table className="styled-table">
                                        <thead>
                                            <tr>
                                                <th >S No.</th>
                                                <th >Collected On</th>
                                                <th >Shirt</th>
                                                <th >Pent</th>
                                                <th >T Shirt</th>
                                                <th >Lower</th>
                                                <th >Shorts</th>
                                                <th >Towel</th>
                                                <th >Pillow Cover</th>
                                                <th >Bed Sheet</th>
                                                <th >Distributed On</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {userData.clothes?.slice(0).reverse().map(getClothes)}
                                        </tbody>
                                    </table>

                                    <AddClothes />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
