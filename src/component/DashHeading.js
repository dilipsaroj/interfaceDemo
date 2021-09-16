import React, { Component } from 'react'

export class DashHeading extends Component {
    constructor(props){
        super(props)
        this.state={
            viewType:1,
            viewState:true
        }
    }

    tabHandlePro =()=>{
            this.setState({
                viewType:1,
                viewState:true
            })
       
        
    }
    tabHandlePort = ()=>{
            this.setState({
                viewType:2,
                viewState:true
            })
       
    }
    render() {
        return (
            <div className="dashHeading_style">
                <div>
                    <h1>Hello Tam</h1>
                    <p>Have a nice day Work</p>
                </div>

                    <div className="row  col-lg-12 col-md-12 col-sm-12 col-12 btn_style ">
                        <div className=" text-center col-lg-6 col-md-6 col-sm-12 col-12 ">
                            <input type="button" className="btn clickbtn " id="btn_Submit" value="Your Pro" onClick={() => this.tabHandlePro()} />
                        </div>
                        <div className=" text-center col-lg-6 col-md-6 col-sm-12 col-12 ">
                            <input type="button" className="btn clickbtn " id="btn_Submit" value="Your Portfolio" onClick={() => this.tabHandlePort()} />
                        </div>
                    </div>
                {
                    this.state.viewType === 1 ?
                    <>
                        <div className="dash_image">
                        </div>
                        <div className=" bottom_style col-lg-12 col-md-12 col-sm-12 col-12 row">
                                <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                                    <h4>Renew your Portfolio</h4>
                                    <p>$99.00 for additional year</p>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-4">

                                </div>
                        </div>
                    </>
                    :   null

                }
                {
                    this.state.viewType === 2 ?
                    <>
                        <div className="dash_image">
                        </div>
                        <div className=" bottom_style col-lg-12 col-md-12 col-sm-12 col-12 row">
                                <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                                    <h4>Renew your Pro Account</h4>
                                    <p>$99.00 for additional year</p>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-4">

                                </div>
                        </div>
                    </>
                    :null
                }

            </div>
        )
    }
}

export default DashHeading
