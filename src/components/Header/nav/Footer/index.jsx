import Magnetic from '../../../Magnetic';
import styles from './style.module.scss';

export default function index() {
  return (
    <div className={styles.footer}>
      <Magnetic>
        <a
          href='https://www.instagram.com/the_chanchanman2774/'
          target='_blank'
          rel='noreferrer'
        >
          Instagram
        </a>
      </Magnetic>
      <Magnetic>
        <a
          href='https://github.com/arshali2774'
          target='_blank'
          rel='noreferrer'
        >
          Github
        </a>
      </Magnetic>
      <Magnetic>
        <a
          href='https://www.linkedin.com/in/arshali2774/'
          target='_blank'
          rel='noreferrer'
        >
          LinkedIn
        </a>
      </Magnetic>
    </div>
  );
}
