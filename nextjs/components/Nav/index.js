import Link from "next/link";

import styles from "./Nav.module.css";

const Nav = () => (
  <div className={styles.Nav}>
    <a
      target="_blank"
      href="https://github.com/zesty-io/demos/tree/main/nextjs"
    >
      Nextjs Demo
    </a>
    <Link href="/">
      <a>Home (ServerSideProps) </a>
    </Link>{" "}
    <Link href="/search-example">
      <a>Search Example (StaticProps)</a>
    </Link>
    <Link href="/flix">
      <a>Flix (StaticProps Dynamic Routes) </a>
    </Link>
    <Link href="/blog">
      <a>Blog (ServerProps Dynamic Routes)</a>
    </Link>
    <Link href="/autolayout">
      <a>AutoLayout</a>
    </Link>
    <img
      src="https://brand.zesty.io/zesty-io-logo-horizontal-light.png"
      alt="Zesty.io"
    />
  </div>
);

export default Nav;
