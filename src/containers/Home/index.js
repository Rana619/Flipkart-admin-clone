import React, { useState } from 'react'
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import {
    GrUserAdmin, 
    GrUser
} from "react-icons/gr";

import Layout from '../../components/Layout/index.js';

function Home(props) {

       const websiteUsers = useSelector((state) => state.websiteUsers);
       const adminUsers = useSelector((state) => state.adminUsers);
       const [users, setUsers] = useState(websiteUsers.websiteUsers);

       return (
              <Layout sidebar >
                     <div className="categoryCont" >
                            <h3>Users</h3>
                            <div className="actionBtn" >
                                   <button onClick={() => setUsers(adminUsers.adminUsers)} ><GrUserAdmin style={{marginRight : "5px"}} />Admin</button>
                                   <button onClick={() => setUsers(websiteUsers.websiteUsers)} ><GrUser style={{marginRight : "5px"}} />Normal Users</button>
                            </div>
                     </div>
                     <div>
                            <Table style={{ fontSize: "15px" }} responsive="sm">
                                   <thead>
                                          <tr>
                                                 <th></th>
                                                 <th>Name</th>
                                                 <th>Email</th>
                                                 <th>Contact Number</th>
                                          </tr>
                                   </thead>
                                   <tbody>
                                          {
                                                 users.length > 0 && users.map((user, index) => (
                                                        <tr key={index} >
                                                                      <td>{index + 1}</td>
                                                                      <td>{`${user.firstName} ${user.lastName}`}</td>
                                                                      <td>{user.email}</td>
                                                                      <td>{user.contactNumber ? user.contactNumber : "-"}</td>

                                                        </tr>
                                                 ))
                                          }

                                   </tbody>
                            </Table>
                     </div>
              </Layout>
       )
}

export default Home
