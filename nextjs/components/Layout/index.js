// https://nextjs.org/learn/basics/assets-metadata-css/layout-component

import styles from './Layout.module.css'

export default function Layout({ children }) {
    return <div className={styles.container}>{children}</div>
}