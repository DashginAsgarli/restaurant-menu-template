import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    function login(email, password) {
        const fakeUser = { name: email.split('@')[0], email };
        setUser(fakeUser);
        return true;
    }

    function register(name, email, password) {
        setUser({ name, email });
        return true;
    }

    function logout() {
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}