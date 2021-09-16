import React, { Component } from 'react'
import swal from 'sweetalert';
import UserSide from './sidenav'
import Dashboard from './Dashboard'

class Details extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }

    // validating the numbers length
    maxLengthCheck = (object) => {if (object.target.value.length > object.target.maxLength) {
        object.target.value = object.target.value.slice(0, object.target.maxLength)
         }
       } 

    render() {
        return (
            <div className="container">
                <div className="main_card ">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-12 row py-2">
                    <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                        <UserSide />
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-12 col-12 row dashbord">
                        <Dashboard />
                    </div>
                     {/* <div className="row  col-lg-12 col-md-12 col-sm-12 col-12 btn_style">
                        <div className=" text-center col-lg-6 col-md-6 col-sm-6 col-12 ">
                            <input type="button" className="btn clickbtn " id="btn_Submit" value="clear" onClick={() => this.onClear()} />
                        </div>
                        <div className=" text-center col-lg-6 col-md-6 col-sm-6 col-12 ">
                            <input type="button" className="btn clickbtn " id="btn_Submit" value="continue" onClick={() => this.onSubmit()} />
                        </div>
                    </div> */}
                  </div>
                </div>
            </div>
        )
    }
}

export default Details;