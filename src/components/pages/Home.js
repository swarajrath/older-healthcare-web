import React, { Component } from 'react';
import { RiHeartPulseFill } from 'react-icons/ri'
import { GiHeartOrgan, GiRunningShoe } from 'react-icons/gi'
import './Home.css'

export default class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <h2>Hi Swaraj, <br /> Here's your health today.</h2>
                </div>
                <div>
                    <h3>Categories</h3>
                </div>
                <div className="d-flex justify-content-around">
                    <div>
                        <div className="upperCard color1">
                            <RiHeartPulseFill />
                        </div>
                        <div className="belowCard">

                        </div>
                    </div>
                    <div>
                        <div className="upperCard color2">
                            <GiHeartOrgan />
                        </div>
                        <div className="belowCard">
                            <p>Blood Pressure</p>
                            <p>76-178</p>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-around">
                    <div>
                        <div className="upperCard color3">
                            <RiHeartPulseFill />
                        </div>
                        <div className="belowCard">

                        </div>
                    </div>
                    <div>
                        <div className="upperCard color4">
                            <RiHeartPulseFill />
                        </div>
                        <div className="belowCard">

                        </div>
                    </div>
                </div>

                <div>
                    <h3>Your Mission</h3>
                </div>
                <div className="underCards">
                    <div className="card-2 d-flex flex-row">
                        <div className="logoCard">
                            <GiRunningShoe />
                        </div>
                        <div className="card-text">
                            <p style={{fontWeight: "bold"}}>5022</p>
                            <p>Today</p>
                        </div>
                    </div>
                    <div className="card-2 d-flex flex-row">
                        <div className="logoCard">
                            <GiRunningShoe />
                        </div>
                        <div>
                            <p>5022</p>
                            <p>Today</p>
                        </div>
                    </div>
                    <div className="card-2 d-flex flex-row">
                        <div className="logoCard">
                            <GiRunningShoe />
                        </div>
                        <div>
                            <p>5022</p>
                            <p>Today</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
