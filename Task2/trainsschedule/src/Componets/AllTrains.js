import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import axios from "axios";
import './alltrains.css'
import { NavLink } from 'react-router-dom';

function AllTrains() {

    const [allInfo, setAllInfo] = React.useState([])

    React.useEffect(()=>{
        axios({
            url: "http://localhost:3001/trains",
            method: "GET"
        })
        .then((res) => { 
            setAllInfo(res.data)
        })
        .catch((err) => { 
            console.log(err)
        });
    }, []) 

    return (
        <>
         <div className='alltrains'>
            {
               
                allInfo && allInfo.map((data) =>{
                    return (
                            <Card style={{ width: '18rem', marginTop:"20px" }}>
                                <Card.Img variant="top" src={data.img} />
                                <Card.Body>
                                    <Card.Title>{data.name}</Card.Title>
                                    <Card.Text style={{textAlign:"justify"}}>
                                    {data.info}
                                    </Card.Text>
                                    <Button variant="primary"><NavLink to={`/train/${data.name}`} style={{color:"black"}} >View More</NavLink></Button>
                                </Card.Body>
                            </Card>
                       
                    )
                })
                
            }  
            </div>   
        </>
    )
}

export default AllTrains;
