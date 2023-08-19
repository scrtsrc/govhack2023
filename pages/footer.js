import React from "react";
import styles from "../styles/common.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://perth.wa.gov.au/en"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{" "}
        <img
          src="https://rgcopcorpweb920-cdn-endpoint.azureedge.net/-/media/Project/COP/COP/COP/Assets/Logos/City-of-Perth-Logos/COP_Brandmark_Tagline_Primary_Colour_Black.png?h=904&w=3547&rev=1c25717c54664788bd921d09d393e988&modified=20221111053706&hash=4FAB4CB4BCDE7CB401B0D54CB77158E4"
          alt="City of Perth Logo"
          className={styles.logo}
        />
      </a>
    </footer>
  );
}
