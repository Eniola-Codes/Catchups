import Link from 'next/link'
import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Catchups</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All Catchups</Link>
          </li>
          <li>
            <Link href='/new-meetup'>Add Catchup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
