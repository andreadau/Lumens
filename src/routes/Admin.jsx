import React, { useEffect } from 'react';
import NavBarAdmin from '../components/AdminPage/NavBarAdmin';
import AdminLogin from '../components/AdminPage/AdminLogin';
import styles from '../assets/styles/Admin.module.scss';

const Admin = () => {
    useEffect(() => {
        document.body.classList.add(styles.adminBody);

        return () => {
            document.body.classList.remove(styles.adminBody);
        };
    }, []);

    return (
        <div className={styles.admin}>
            <AdminLogin />
            {/* <NavBarAdmin /> */}
        </div>
    );
};

export default Admin;
