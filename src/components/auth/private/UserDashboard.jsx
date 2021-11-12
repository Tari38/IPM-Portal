import React from "react";
import dashboardIcon from "../../../images/tachometer-alt-solid.svg";
import { Card, Table } from "react-bootstrap";
import "./UserDashboard.css";

export default class UserDashboard extends React.Component {


    render() {

      return (
          <div>
          <header>
            <img id="dashboardIcon" src={dashboardIcon} alt="dashboard icon"></img><h2>Welcome to your Dashboard</h2>
          </header>

          <Card className="card-profile">
          </Card>

          <Table responsive="md">

          <thead>
           <tr>
            <th>Statements</th>
           </tr>
          </thead>
          <tbody>
            <tr>
             <td><li><a href="/statements">View Statements</a></li></td>
            </tr>
          </tbody>
          <thead>
           <tr>
            <th>Disbursements</th>
           </tr>
          </thead>
          <tbody>
            <tr>
             <td><li><a href="/disbursements">View Disbursements</a></li></td>
            </tr>
          </tbody>
          <thead>
           <tr>
            <th>Admin</th>
           </tr>
          </thead>
          <tbody>
            <tr>
             <td><li><a href="/address">Address Book</a></li></td>
            </tr>
            <tr>
             <td><li><a href="/preferences">Statement Preferences</a></li></td>
            </tr>
          </tbody>




          </Table>
          </div>
        );
    }
}