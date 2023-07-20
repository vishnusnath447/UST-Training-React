import React from 'react'
import './ReactForms.css'

const ReactForms = () => {

    const [formData,setFormData] = React.useState({
        'username':'',
        'password':'',
        'notRobot':false,
        'gender':'male',
        'state':'Select State'
    })

    const login=(event)=>{
        console.log(`Username:${formData.username}
        Password:${formData.password}
        NotRobot:${formData.notRobot}
        Gender:${formData.gender}
        State:${formData.state}`)
    }

    const saveData=(event)=>{
        setFormData(prevData=>{
            const {id,value,checked,type} = event.target
            return{
                ...prevData,
                [id]:type==='checkbox'?checked:value
            }
        })
    }

  return (
    <div className='outer-container container card'>
        <div className="card-body">
            <div className="heading text-center mt-4">
                <h1>React Login Form</h1>
            </div>
            <div className="card m-5">
                <div className="card-body p-5">
                    <div className="username">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" className="form-control" onChange={saveData} value={formData.username} id='username'/>
                    </div>
                    <div className="password">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" onChange={saveData} value={formData.password} id='password'/>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-check mt-3">
                                <input className="form-check-input" value='male' type="radio" id="gender" onChange={saveData} checked={formData.gender==='male'}/>
                                <label className="form-check-label" htmlFor="gender">Male</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" value='female' type="radio" id="gender" onChange={saveData} checked={formData.gender==='female'}/>
                                <label className="form-check-label" htmlFor="gender">Female</label>
                            </div>
                            <div className="form-check mt-3">
                                <label className="form-check-label" htmlFor="notRobot">I am not a Robot</label>
                                <input className="form-check-input" type="checkbox" checked={formData.notRobot} onChange={saveData} id="notRobot" />
                            </div>
                        </div>
                        <div className="col">
                            <select className="form-select mt-4" aria-label="Default select example" value={formData.state} onChange={saveData} id='state'>
                                <option selected>Select State</option>
                                <option value="Kerala">Kerala</option>
                                <option value="TamilNadu">Tamil-Nadu</option>
                                <option value="Goa">Goa</option>
                            </select>
                        </div>
                    </div>
                    {
                        formData.notRobot &&
                        <div className="button d-grid">
                            <button type="button" className="btn btn-outline-primary mt-4" onClick={login}>Submit</button>
                        </div>
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReactForms