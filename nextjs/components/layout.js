// https://nextjs.org/learn/basics/assets-metadata-css/layout-component

import styles from './layout.module.css'

export default function Layout({ children }) {
    return <div className={styles.container}>{children}</div>
}