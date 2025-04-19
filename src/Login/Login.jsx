import React from 'react'
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    function handleLogOut() {
        googleLogout();
    }

    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            {/* Google Login Button */}
            <div className="mb-4">
                <GoogleLogin
                    onSuccess={(credentialResponse) => {
                        console.log(credentialResponse);
                        console.log(jwtDecode(credentialResponse.credential));
                        navigate("/home");
                    }}
                    onError={() => console.log("Login Failed")}
                    auto_select={true}
                    className="p-2 rounded-lg shadow-md hover:shadow-lg"
                />
            </div>

            {/* Logout Button */}
            <button
                onClick={handleLogOut}
                className="px-6 py-2 text-white bg-red-500 rounded-lg shadow-md hover:bg-red-600 hover:shadow-lg transition-all"
            >
                Logout
            </button>
        </div>
    );
}

export default Login;
