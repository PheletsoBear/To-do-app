import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'
function Login(){
    let history = useHistory();
    
    const login = (()=>{
        history.push('/Home');
    })

return(
   
   <div className="main" style={{marginTop: "250px"}}>
     <div className="container">
         <h1 style={{paddingLeft: "23vh"}}>Login</h1>
        <input type="email" placeholder="Enter your email" /><br/>
        <input type="passwword" placeholder="Enter your passsword" /><br/>
        <button id="btn" onClick={login}>Log in</button><br/>
        <span className='span'>Don't have an account?</span>
        <span>
        <Link className='link' to='/Sign-Up'> Create Account</Link>
           </span>
            
     </div>
    </div>


);

}
export default Login;