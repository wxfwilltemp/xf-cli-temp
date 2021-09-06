import styles from './login.less';
import HelloSvg from '@/assets/img/hello.svg';

const Login = () => {
  return (
    <div className={styles.login}>
      <div className="inner-content">
        <p>基于 webpack5 + react + redux + typescript + axios 简易脚手架</p>
        <img src={HelloSvg} alt="hello" className="welcome" />
      </div>
    </div>
  );
};

export default Login;
