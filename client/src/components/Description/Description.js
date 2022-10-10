import React, { useEffect, useState } from 'react';
import './Description.css';
const Description = () => {
    const [info, setInfo] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5500/api/v1/description')
        .then(res => res.json())
        .then(data => setInfo(data))
    }, [])
    console.log(info)
    const handleUpdate = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const description = e.target.description.value;
        const data = {
            name,
            description
        }
        fetch('http://localhost:5500/api/v1/description',{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => setInfo(data))
        e.target.reset();
    }
    return (
        <div>
            <div className='container'>
                <div className='description'>
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <img className='img-style ms-0 ps-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-mbp16-space-m1-2021_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1643239867000" height='300px' width='300px' alt="" />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-7">
                            <div className='text-start'>
                                <h3>Title</h3>
                                <h5>{info[0]?.name}</h5>
                                <p  className='mb-0 mt-1'><b>Description</b></p>
                                <p>{info[0]?.description}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* update description */}
                <div className="update-information">
    
                    <form onSubmit={handleUpdate} className='update-card'>
                        <h3 className='text-center mb-3'>Update Information</h3>
                        <div class="mb-3">
                            <label for="name" class="form-label">Name</label>
                            <input type="text" class="form-control" id="name" placeholder="Name" required/>
                        </div>
                        <div class="mb-3">
                            <label for="description" class="form-label">Description</label>
                            <textarea class="form-control" id="description" rows="4" placeholder='Description' required></textarea>
                        </div>
                        <button className='update-btn' type="submit">Update</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Description;