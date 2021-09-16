import React, { Component } from 'react';
// import Chart from 'apexcharts';
// import ReactApexChart from 'apexcharts'
import Chart from 'react-apexcharts'

export class DashOtherDetails extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          options: {
            chart: {
              id: "radial"
            },
            // xaxis: {
            //   categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
            // }
          },
          series: [
            {
              name: "series-1",
              data: [30, 40, 45, 50, 49, 60, 70, 91],
              labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
            }
          ],
        
        };
      }
    render() {

        return (
            <div className="">
                <div className="row col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                        <input type="text"  className="form-control "/>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                        <p>logo1</p>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                    <p>logo1</p>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt-3">
                    <p>Your Earning</p>
                    <div className="internal_card row col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                            <Chart options={this.state.options} series={this.state.series} type="radialBar" width={150} height={150} />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                            <Chart options={this.state.options} series={this.state.series} type="radialBar" width={150} height={150} />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                            <div className="card_blue col-lg-12 col-md-12 col-sm-12 col-12">

                            </div>
                            <div className="card_pink col-lg-12 col-md-12 col-sm-12 col-12">

                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt-3">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12 row ">
                        <div className=" col-lg-6 col-md-6 col-sm-12 col-12">
                        <p>Your Best Month</p>
                            <div className="card_common_your col-lg-12 col-md-12 col-sm-12 col-12">
                                    <h5>$24.89</h5>
                                    <p>february</p>
                            </div>
                        </div>

                        <div className=" col-lg-6 col-md-6 col-sm-12 col-12">
                        <p>Your Best Tool</p>
                            <div className="card_common_your col-lg-12 col-md-12 col-sm-12 col-12">
                                    <h5>$129.89</h5>
                                    <p>Sketch App</p>
                            </div>
                        </div>
                    </div>
                    
                </div>

                <div className=" internal_card col-lg-12 col-md-12 col-sm-12 col-12 mt-3">
                    <div className=" line_style row col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                            <p>Product</p>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                            <p>Earning</p>
                            </div>
                    </div>
                    <div className="line_style row col-lg-12 col-md-12 col-sm-12 col-12">
                           <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                                <p>logo</p>
                           </div> 
                           <div className="line_style_middle col-lg-6 col-md-6 col-sm-6 col-6">
                                <h6>Thefox 6 Template</h6>
                                <p>Sketch App</p>
                           </div> 
                           <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                                <p>+16.49</p>
                           </div> 
                           <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                                <p>$19.63</p>
                            </div> 
                    </div>
                    <div className="line_style row col-lg-12 col-md-12 col-sm-12 col-12">
                           <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                                <p>logo</p>
                           </div> 
                           <div className="line_style_middle col-lg-6 col-md-6 col-sm-6 col-6">
                                <h6>Thefox 6 Template</h6>
                                <p>Sketch App</p>
                           </div> 
                           <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                                <p>+16.49</p>
                           </div> 
                           <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                                <p>$19.63</p>
                            </div> 
                    </div>

                </div>
            </div>
        )
    }
}

export default (DashOtherDetails)
