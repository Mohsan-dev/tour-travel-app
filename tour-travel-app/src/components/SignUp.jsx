import './SignUpStyle.css'

function SignUp() {
    return (
        <div className='sign-container'>
            <div className='sign-box'>
                <h1>Trippy</h1>
                <p>Create your account</p>
                <form>
                    <input placeholder='Full Name' />
                    <input placeholder='Email Address' />
                    <input placeholder='Password' />
                    <button>Sign Up</button>
                </form>
                <div className='login'>
                    <p>Already have an account? <span>Log in</span></p>
                </div>
            </div>
        </div>
    );
}

export default SignUp;