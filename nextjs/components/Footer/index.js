import React from 'react'
import styles from '../../styles/Home.module.css';

function Footer(props) {
    return (
      <div className={styles.footer}>
        <img width={70} src={'https://brand.zesty.io/zesty-io-logo.png'} />
        {props.children}
      </div>
    );
}

export default Footer
