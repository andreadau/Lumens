import React, { useState, useCallback } from 'react';
import AuthModal from '../AuthModal'; // Import the AuthModal

const AdminLogin = () => {
    // State to control modal visibility
    const [showAuthModal, setShowAuthModal] = useState(true); // Open the modal by default

    // Default to signup mode for creating an account
    const isLoginMode = false;

    // Define permissions for the Employee
    const permissions = {
        stockPermission: true, 
    };

    const handleClose = useCallback(() => {
        setShowAuthModal(false);
    }, []);

    return (
        <div>
            {showAuthModal && (
                <AuthModal 
                    userType="Employee" // Set userType as Employee
                    permissions={permissions} // Pass permissions
                />
            )}
        </div>
    );
};

export default AdminLogin;
