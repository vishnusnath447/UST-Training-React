import React from 'react'
import './RoomAvailability.css'

const RoomAvailability = () => {

    const [data,setData] = React.useState([
        { num: 1, type: 'Gold', status: 'Free' },
        { num: 2, type: 'Gold', status: 'Booked' },
        { num: 3, type: 'Gold', status: 'Free' },
        { num: 4, type: 'Gold', status: 'Booked' },
        { num: 5, type: 'Gold', status: 'Free' },
        { num: 6, type: 'Platinum', status: 'Booked' },
        { num: 7, type: 'Platinum', status: 'Booked' },
        { num: 8, type: 'Platinum', status: 'Free' },
        { num: 9, type: 'Platinum', status: 'Booked' },
        { num: 10, type: 'Platinum', status: 'Free' },
        { num: 11, type: 'Diamond', status: 'Free' },
        { num: 12, type: 'Diamond', status: 'Free' },
        { num: 13, type: 'Diamond', status: 'Free' },
        { num: 14, type: 'Diamond', status: 'Free' },
        { num: 15, type: 'Diamond', status: 'Booked' }
    ]);
    const typeList = [];

    const groupType=()=>{
        for(let i=0;i<data.length;i++){
            if(typeList.includes(data[i].type)===false){
                typeList.push(data[i].type);
            }
        }
        console.log(typeList);
    }

    const change=(element)=>{
        const index = data.indexOf(element);
        setData((preData) => {
              const updatedData = [...preData];
              updatedData[index] = {
                ...updatedData[index], 
                status: element.status==='Free'?'Booked':'Free' 
              };
              return updatedData
            }
        );
    }
    
    groupType();

  return (
    <div className='container'>
        {typeList.map((element,index)=>
            <div className="inner-container" key={index}>
                <div className="heading">
                    <h1>{element}</h1>
                </div>
                <div className="data">
                {data.filter((el)=>el.type===element).map((e)=>
                    <button className="element-div" onClick={()=>change(e)} style={
                        {
                            backgroundColor:e.status==='Booked'?'rgb(28, 28, 96)':'aliceblue',
                            color:e.status==='Booked'?'aliceblue':'rgb(28, 28, 96)',
                        }
                    }>
                        <h3>{e.num}</h3>
                    </button>
                )}

                </div>
            </div>
        )}
    </div>
  )
}

export default RoomAvailability