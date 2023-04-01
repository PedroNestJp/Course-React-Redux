import React from 'react'
import FamilyMenber from './FamilyMenber'

export default props => {
  return (
    <div>
        <FamilyMenber name='Pedro' lastName='Silva'/>
        <FamilyMenber name='Miguel' lastName={props.lastName}/>
        <FamilyMenber name='Gabriel' {...props} />
    </div>
  )
}

