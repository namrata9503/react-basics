import React from 'react';

const Validation = (props)=>
{
    let ValidationMessage="too short";
    
    if(props.inputLength <= 5)
    {
        ValidationMessage= "too short"
    }
    else{
        ValidationMessage= "enough"

    }
return(
    <div>
      <p>{ValidationMessage}</p>

    </div>
)
}

export default Validation;