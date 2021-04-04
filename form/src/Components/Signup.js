import React,{useState}  from 'react'

const Signup=({history})=>{
   const [initial, Final] = useState({
       email:'',
       pass:'',
       num:''
   })
   
 const change=(e)=>{
           Final({...initial,[e.target.name] : e.target.value})

       }
   
  

const submit = ()=> {
    history.push('/signupdata',{
        // em:initial.email,
        // pass:initial.pass,
        // num:initial.num
        final:initial


    })
    console.log("dkd") 
}

    return (
        <div>
            
         <h1>signup</h1>
           <input type="text" placeholder="email" onChange={change} name="email" value={initial.email}/>
           <input type="text" placeholder="text" onChange={change} name="pass" value={initial.pass}/>
           <input type="number" placeholder="number " onChange={change } name="num" value={initial.num}/>
           <button onClick={submit} >Submit</button>
        </div>
    )

    }
export default Signup
