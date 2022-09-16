import {useNavigate} from 'react-router-dom'

function Login(props) {
    const navigate = useNavigate(); //Initilizing Use Navigate
    async function handleSubmit(event) {
        event.preventDefault();
        let user = {
            username: event.target.username.value,
            password: event.target.password.value
        }
        let backend_url = 'http://localhost:3200/login';
        let options = {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        }
        let response = await fetch(backend_url, options); 
        let responseData = await response.json();
        if(responseData.flag === true){
            navigate('/restaurant');
        }
        else{
            alert(responseData.msg);
        }
    }
    return (
        <div>
            <h1>Login Form</h1>
            <form onSubmit={handleSubmit}>
                Username: <input type="text" name="username" id="username" /><br />
                Password: <input type="password" name="password" id="password" /><br />
                <input type="submit" value="login" />
            </form>
        </div>
    );
}
export default Login;




