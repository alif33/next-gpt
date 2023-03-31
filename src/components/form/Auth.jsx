import React from "react";
import { useForm } from "react-hook-form";
import styles from "./Auth.module.css";
// import { useUserAuth } from "../../context/AuthContext"
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth"


import { auth } from "../../config/firebase"

const Auth = ({ role }) => {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
      } = useForm();

    const logIn = async(email, password) => {
        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
            })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('There was an error with the fetch request:', error);
        });
    }


    const onSubmit = async(data) => {
        const { email, password } = data;
        try {
           const res = await logIn(email, password);
        } catch (error) {
            console.log(error);
        }
    };


  return (
    <div>
        <div className="d-flex justify-content-center">
            <img
                src="/img/pricing-plan.svg"
            />
            <h1>{role==="login" ? "Log In": "Sign Up"}</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group mt-3">
                <label htmlFor="InputEmail">Email address</label>
                <input 
                    id="InputEmail" 
                    type="email" 
                    className="form-control" 
                    placeholder="Enter email"
                    {...register("email", { required: true })}
                />
            </div>
            <div className="form-group mt-3">
                <label htmlFor="InputPassword">Password</label>
                <input 
                    id="InputPassword" 
                    type="password" 
                    className="form-control" 
                    placeholder="Password"
                    {...register("password", { required: true })}
                />
            </div>
            <div className="d-flex justify-content-center mt-3">
                <button type="submit" className="btn btn-primary btn-submit">Submit</button>
            </div>
        </form>    
    </div>
  );
};

export default Auth;
