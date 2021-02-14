import React, { useState } from 'react';
import BloodPressureMeter from '../../images/blood-pressure details.jpg';
import './BloodPressure.css';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import { Modal, Button, InputGroup, FormControl } from 'react-bootstrap';

export default function BloodPressure() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [systolic, setsystolic] = useState("")
    const [dystolic, setdystolic] = useState("")

    const [bloodPressureData, setbloodPressureData] = useState([
        { id: 1, date: "10-10-2020", bloodPressure: "80 - 120" },
        { id: 2, date: "12-10-2020", bloodPressure: "80 - 120" },
        { id: 3, date: "10-10-2021", bloodPressure: "80 - 120" },
        { id: 4, date: "19-10-2020", bloodPressure: "80 - 120" },
        { id: 5, date: "21-09-2021", bloodPressure: "70 - 120" }
    ])

    const handleSubmit = (e) =>  {
        e.preventDefault()

        var bloodPressure = systolic.concat(" - ", dystolic)
        var date = "12-12-2020"

        var newData = {id: 7, date, bloodPressure}

        setbloodPressureData([...bloodPressureData, newData])

    }


    return (
        <div>
            <div className="heading-page d-flex justify-content-around">
                <h3>Blood Pressure</h3>
                <div className="plus-logo" onClick={handleShow}>
                    <AiOutlinePlusSquare />
                </div>
            </div>
            {/* <div className="BloodPressureMeter ">
                <img src={BloodPressureMeter} />

            </div> */}


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text>Systolic and Dystolic</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl value={systolic} onChange={(e) => setsystolic(e.target.value)} />
                    <FormControl value={dystolic} onChange={(e) => setdystolic(e.target.value)} />
                </InputGroup>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            <div>
                <table className="table table-hover table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Blood Pressure</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            bloodPressureData.map((data) => {
                                return (
                                    <tr key={data.id}>
                                        <th scope="row">{data.date}</th>
                                        <td>{data.bloodPressure}</td>
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
