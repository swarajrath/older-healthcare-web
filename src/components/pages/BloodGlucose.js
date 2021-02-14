import React, { useState } from 'react';
import './BloodGlucose.css';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import { Modal, Button, InputGroup, FormControl } from 'react-bootstrap';

export default function BloodGlucose() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [bloodGlucoseData, setbloodGlucoseData] = useState([
        { id: 1, date: "10-10-2020", bloodGlucose: "10.2" },
        { id: 2, date: "12-10-2020", bloodGlucose: "19.3" },
        { id: 3, date: "10-10-2021", bloodGlucose: "20.6" },
        { id: 4, date: "19-10-2020", bloodGlucose: "90.3" },
        { id: 5, date: "21-09-2021", bloodGlucose: "80.4" }
    ])


    return (
        <div>
            <div className="heading-page d-flex justify-content-around">
                <h3>Blood Glucose Level</h3>
                <div className="plus-logo" onClick={handleShow}>
                    <AiOutlinePlusSquare />
                </div>
            </div>
            {/* <div className="BloodGlucoseMeter ">
                <img src={BloodGlucoseMeter} />

            </div> */}


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text>Systolic and Dystolic</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl />
                    <FormControl />
                </InputGroup>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            <div>
                <table className="table table-hover table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Blood Glucose</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            bloodGlucoseData.map((data) => {
                                return (
                                    <tr key={data.id}>
                                        <th scope="row">{data.date}</th>
                                        <td>{data.bloodGlucose}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
