import React from 'react'

const Signupdata = ({location}) => {
    console.log(location)
    return (
        <div>
          <h1>your all data is here   </h1>  

         <h1>{location.state.final.email}  
          {location.state.final.pass}
          {location.state.final.num}</h1>

        </div>


    )
}

export default Signupdata
