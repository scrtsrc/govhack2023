import React from "react";
import styles from "../styles/header.module.css";


export default function Header({ pageTitle }) {
  return (
    <>
      <div className={styles.header}>
        <a href="/">
        <title className={styles.title}> &larr;</title>
        </a>
        <h1>{`${pageTitle} EVENTS`} </h1>
      </div>
    </>
  );
}
