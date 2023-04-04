import { db } from "../firebase/config";
import { app } from "../firebase/config";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth';

import { useState, useEffect } from "react";

export const useAuthentication = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    // Clean up -> Deal with memory leak
    const [cancelled, setCancelled] = useState(false);

    const auth = getAuth();

    function checkIfIsCancelled() {
        if (cancelled) {
            return;
        }
    }

    // Register function
    const createUser = async (data) => {
        checkIfIsCancelled();
        setLoading(true);
        setError(null);

        try {
            const { user } = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            );

            await updateProfile(user, {
                displayName: data.displayName
            });

            setLoading(false);

            return user;

        } catch (error) {
            console.log(error.message);
            console.log(typeof error.message);

            let systemErrorMessage;

            if (error.message.includes("Password")) {
                systemErrorMessage = "The password must contain at least 6 characters.";
            } else if (error.message.includes("email-already")) {
                systemErrorMessage = "Email is already register.";
            } else {
                systemErrorMessage = "An error has occurred, please try again later.";
            }

            setLoading(false);
            setError(systemErrorMessage);
        }

    };

    // Logout function
    const logout = () => {
        checkIfIsCancelled();
        signOut(auth);
    };

    // Login function
    const login = async (data) => {
        checkIfIsCancelled();
        setError("");
        setLoading(true);

        try {
            signInWithEmailAndPassword(auth, data.email, data.password);
            setLoading(false);

        } catch (error) {
            let systemErrorMessage;

            if (error.message.includes("user-not-found")) {
                systemErrorMessage = "User not found.";
            } else if (error.message.includes("wrong-password")) {
                systemErrorMessage = "Wrong password.";
            } else {
                systemErrorMessage = "An error has happened, please try again later.";
            }

            console.log(systemErrorMessage);
            console.log(error);
            setError(systemErrorMessage);
            setLoading(false);
        }
    };

    useEffect(() => {
        return () => setCancelled(true);
    }, []);

    return { auth, createUser, logout, error, loading, login };
};
