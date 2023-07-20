import React from 'react'
import './HappyCrew.css'

const HappyCrew = () => {

    const [formData,setFormData]=React.useState({
        'name':'',
        'email':'',
        'cargo':false,
        'commuter':false,
        'touring':false
    })

    const submit=()=>{
        alert(`
        Name: ${formData.name}
        Email: ${formData.email}
        Cargo: ${formData.cargo}
        Commuter: ${formData.commuter}
        Touring: ${formData.touring}
        `);
    }

    const saveData=(event)=>{
        const {type,id,value,checked} = event.target;
        setFormData(preData=>{
            return{
                ...preData,
                [id]:type==='checkbox'?checked:value
            }
        });
    }

  return (
    <div className="container">
        <div className="heading">
            <h1>Join the Happy Crew</h1>
            <div className="subheading">
                <h2>Get weekly ebike tips,news and discounts!</h2>
            </div>
        </div>
        <div>
            <form className="forms">
                <div className="form-group">
                    <label htmlFor="name">First Name <span>*</span></label>
                    <input type="text" name="name" id="name" value={formData.name} onChange={saveData}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email <span>*</span></label>
                    <input type="email" name="email" id="email" value={formData.email} onChange={saveData} />
                </div>
                <div className="form-group-check">
                    <label htmlFor="interested">What are you interested in?</label><br/>
                    <input type="checkbox" className="check" checked={formData.cargo} onChange={saveData} id='cargo'/> <p>Cargo</p><br/>
                    <input type="checkbox" className="check" checked={formData.commuter} onChange={saveData} id='commuter'/> <p>Commuter</p><br/>
                    <input type="checkbox" className="check" checked={formData.touring} onChange={saveData} id='touring'/> <p>Touring</p><br/>
                </div>
                <button type="button" onClick={submit}>Subscribe</button>
            </form>
        </div>
    </div>
  )
}

export default HappyCrew