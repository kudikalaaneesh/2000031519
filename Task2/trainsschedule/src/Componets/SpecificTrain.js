import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import axios from "axios";
import './spec.css'
import { useParams } from 'react-router-dom';


function SpecificTrain() {

    const [data, setAllInfo] = React.useState('')
    const { id } = useParams();
    React.useEffect(() => {
        console.log(id)
        axios({
          url: `http://localhost:3001/trains/${id}`,
          method: "GET"
        })
        .then((res) => { 
          setAllInfo(res.data)
        })
        .catch((err) => { 
          console.log(err)
        });
      }, [id]);
      

    return (
        <>
        <div className='alltrains'>
            <Card style={{ width: '18rem', marginTop:"20px" }}>
                <Card.Img variant="top" src={data.img} />
                <Card.Body>
                    <Card.Title>{data.name}</Card.Title>
                    <Card.Text style={{textAlign:"justify"}}>
                    {data.info}
                    </Card.Text>
                    <Card.Text style={{textAlign:"justify"}}>
                    Delays : {data.delays}
                    </Card.Text>
                    <Card.Text style={{textAlign:"justify"}}>
                    expensive : {data.expensive}
                    </Card.Text>
                    <Card.Text style={{textAlign:"justify"}}>
                    cheap : {data.cheap}
                    </Card.Text>
                    
                    
                </Card.Body>
            </Card>
            
        </div>
        </>
        
    )
}

export default SpecificTrain;