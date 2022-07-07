import {Link, useHistory} from 'react-router-dom'
import {link} from 'react-router-dom'


function SignUp(){
    let history = useHistory();
    
    const register = (()=>{
        history.push('/Home');
    })
 return(
     <div className="main" style={{marginTop: "250px"}}>
            <div className="container">

    <h1 style={{paddingLeft: "18vh"}}>  Register Account</h1>
    <input type="email" placeholder="Enter your email" /><br/>
    <input type="passwword" placeholder="Enter your passsword" /><br/>
    <button id="btn" onClick={register}>Sign Up</button>
 </div>
 </div>

 );

}
export default SignUp;