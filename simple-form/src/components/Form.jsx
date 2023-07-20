import React from 'react'
import './Form.css'

const Form = () => {
    const [formData,setFormData] = React.useState({
        'fName':'',
        'lName':'',
        'username':'',
        'city':'',
        'state':'Choose..',
        'zip':''
    })

    const submit=()=>{
        alert(`
        First Name: ${formData.fName}
        Last Name: ${formData.lName}
        Username: ${formData.username}
        City: ${formData.city}
        State: ${formData.state}
        Zip code: ${formData.zip}
        `);
    }

    const saveData=(event)=>{
        const {value,id}=event.target;
        setFormData(preData=>{
            return{
                ...preData,
                [id]:value
            }
        })
    }

  return (
    <div className='container card p-5'>
        <div className="row">
            <div className="col-4">
                <div className="mb-3">
                    <label htmlFor="fName" className="form-label">First name</label>
                    <input type="text" className="form-control" id="fName" value={formData.fName} onChange={saveData} placeholder="Enter your First name" />
                </div>
            </div>
            <div className="col-4">
                <div className="mb-3">
                    <label htmlFor="lName" className="form-label">Last name</label>
                    <input type="text" className="form-control" id="lName" value={formData.lName} onChange={saveData} placeholder="Enter your Last name" />
                </div>
            </div>
            <div className="col-4">
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <div className="input-group">
                        <span className="input-group-text" id="icon">@</span>
                        <input type="text" id='username' className="form-control" value={formData.username} onChange={saveData} placeholder="Username" aria-label="Username" aria-describedby="icon"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-6">
                <div className="mb-3">
                    <label htmlFor="city" className="form-label">City</label>
                    <input type="text" className="form-control" value={formData.city} onChange={saveData} id="city" placeholder="City" />
                </div>
            </div>
            <div className="col-3">
                <div className="mb-3">
                    <label htmlFor="state" className="form-label">State</label>
                    <select className="form-select" aria-label="Default select example" value={formData.state} onChange={saveData} id='state'>
                        <option selected value="Choose..">Choose..</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Goa">Goa</option>
                        <option value="New-Delhi">New-Delhi</option>
                    </select>
                </div>
            </div>
            <div className="col-3">
                <div className="mb-3">
                    <label htmlFor="city" className="form-label">Zip</label>
                    <input type="text" className="form-control" value={formData.zip} onChange={saveData} id="zip" placeholder="Zip" />
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-2">
                <button className="btn btn-primary" onClick={submit} type="button">Submit form</button>
            </div>
        </div>
    </div>
  )
}

export default Form