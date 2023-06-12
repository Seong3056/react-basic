import React from 'react'

const FoodItem = ({foodId,foodName,price}) => {


    return (
    <li id={foodId}> {foodName} ({price.toLocaleString('en-US')}원)</li>
  )
}

export default FoodItem