import  styles from './NavBar.module.css';

const NavBar = () => {
  console.log(styles);
  return (
    <nav className={`container ${styles.NavBar}`}>
      <div>
        <img src="/images/combinatorics.png" alt="logo" />
      </div>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default NavBar;
