import styles from './BasicLayout.less';
import { ComProps } from '../type/displayType';

// const styles = require('./BasicLayout');

export default function GlobalLayout(props: ComProps) {
  return <div className={styles.normal}>我是全局layout{props.children}</div>;
}
