import React from 'react'
import styles from './DeveloperHint.module.css';

function DeveloperHint(props) {
    return (
      <div className={styles.footerGlobal}>
        <div>
          <span className={styles.hintIcon}>!</span>
          {/* <img width={70} src={'https://brand.zesty.io/zesty-io-logo.png'} /> */}
        </div>

        {props.children}
      </div>
    );
}

export default DeveloperHint
