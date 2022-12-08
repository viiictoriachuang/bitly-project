import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css'

const Nav = () => (
  <Link href="/" className={`${styles.nav} d-block`}>
    Back to home
  </Link>
);

export default Nav;
