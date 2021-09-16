import React, { Component } from 'react'
import DashHeading from './DashHeading';
import DashOtherDetails from './DashOtherDetails'

export class Dashboard extends Component {
    render() {
        return (
            <div className="dash_style col-lg-12 col-md-12 col-sm-12 col-12 row">
                <div className="main_page_style col-lg-6 col-md-12 col-sm-12 col-12" >
                    <DashHeading />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-12 dash_other" >
                    <DashOtherDetails />
                </div>
            </div>
        )
    }
}

export default Dashboard
