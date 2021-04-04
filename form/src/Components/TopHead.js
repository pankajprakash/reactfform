import React  from 'react'

const TopHead = ({history}) => {    
   
    const signup=()=>{  
        history.push('/signup')

    
}

    const login=()=>{
        history.push('/login')
        console.log("login")
    }
    return (
        <div className="top-head">
            <ul className="top">
               

               
                <li onClick={signup}>Signup</li>
                
                <li onClick={login}>Login</li>
            </ul>
        </div>
        
    )
}


export default TopHead
