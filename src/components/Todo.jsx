import React, {useState} from 'react'
import { MdDelete } from "react-icons/md";



const Todo = () => {

    const [acitvity, setacitvity] = useState("")
    const [ListData, setListData] = useState([])
    function addActivity() {
           setListData((ListData)=>{
            const updateList =[...ListData, acitvity]
            setacitvity('');
            return updateList
           })
    }
    
    function removeActivity(i) {
           const updateListData = ListData.filter((elem, id)=>{
            return i!=id;
           })
           setListData(updateListData);
    }

    function removeAll() {
      setListData([])
    }
  return (
   <>
    <nav className='navbar '>
      <div className="logo">
        <span className='lo'>iTask</span>
      </div>
      <ul>
        <li>Home</li>
        <li>Your Task</li>
      </ul>
  </nav>

      <div className="container">
        <div className="header">TODO LIST</div>
       <div className="hero">
        <input type="text" placeholder='add Todo' value={acitvity} onChange={(e)=>setacitvity(e.target.value)}/>
        <button className='add' onClick={addActivity}>Add</button>
        </div>
       <h2>Your Todos --</h2>
         {ListData!=[] && ListData.map((data, i)=>{
            return (
                <>
                <p key={i}>
                    <div className="listData">{data}</div>
                    <button className='remove'onClick={()=>removeActivity(i)}><MdDelete />
                    </button>
                </p>
                </>
            )
         })}
         {ListData.length>=1 && 
         <button className='btn' onClick={removeAll}>remove all</button>}
         
      </div>
       
   </>
     
  
  )
}

export default Todo
