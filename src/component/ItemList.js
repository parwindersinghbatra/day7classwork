import React, { useState } from 'react'

const ItemList = ({itemName, index, itemsToBuys, setitemsToBuys}) => {

        const [isChecked, setIsChecked] = useState(false)

         const deleteHandler =() => {
            setitemsToBuys((prevState) =>{
                const data = [...prevState]
                data.splice(index, 1)
                return data
            })
         }

  return (
    <div
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent:'space-between',
            gap:'1rem',  

        }}
    >
        <div key ={index}>
            <input type='checkbox'
                onChange={(e) => {
                    setIsChecked((prevValue) =>! prevValue)
                }}
            /> 
        </div>
        <div>
             <p
                style={{
                    textDecoration: isChecked ? 'Line-through': 'none'
                }}
             > {itemName}</p>
        </div>
         <div>
            <button
                onClick={deleteHandler}
            >Delete</button>
        </div>
    </div>
  )
}

export default ItemList
