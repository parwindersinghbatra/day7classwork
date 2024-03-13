import React, { useState } from 'react'
import ItemList from './ItemList'

const InputContainer = () => {

    const [itemsToBuys, setitemsToBuys] = useState([])

    const [textInputValue, setTextInputValue] = useState("")



    const onClickHandler = ()=>{
        setitemsToBuys((prevData) => {
            return [...prevData, textInputValue]
        })
        setTextInputValue("")
        // console.log(textInputValue)
        
    }
  return (
    <div style={{
        display:'flex',
        justifyContent:'center',
        height:'100vh',
        alignItems: 'center',
    }}>
        <div
            style={{
                backgroundColor:'#f2f2f2',
                padding:'20px',
            }}
            >   
            <h2>Grocery List</h2>
            <div>
                <input type="text" 
                value={textInputValue} 
                onChange={(e) =>{
                    setTextInputValue(e.target.value);
                }}/>
                <button onClick={onClickHandler}>Add Item</button>
            </div>
            <div>
                <p>{itemsToBuys.map((ele, index) => <ItemList   
                itemsToBuys={itemsToBuys}
                setitemsToBuys={setitemsToBuys}
                index = {index} 
                itemName = {ele} 
                key ={index} 
                />)}</p>
            </div>
    </div>

    </div>
  )


}

export default InputContainer
