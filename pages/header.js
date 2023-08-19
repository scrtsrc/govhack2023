import React from "react";
import styles from "../styles/header.module.css";
import Link from 'next/link';


export default function Header({ pageTitle }) {
  return (
    <>
      <div className={styles.header}>
        <Link href="/" className={styles.noDecoration}>
         &larr;
        </Link>
        <h1>{`${pageTitle} EVENTS`} </h1>
      </div>
    </>
  );
}
