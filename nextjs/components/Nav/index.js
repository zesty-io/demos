import Link from 'next/link';

import styles from './Nav.module.css';

const Nav = () => (
  <div className={styles.Nav}>
    <Link href='/'>
      <a>Home</a>
    </Link>{' '}
    <Link href='/search-example'>
      <a>Search Example</a>
    </Link>
    <Link href='/flix'>
      <a>Flix</a>
    </Link>
    <Link href='/blog'>
      <a>Blog</a>
    </Link>
  </div>
);

export default Nav;
