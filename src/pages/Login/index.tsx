import { LoginCard } from '../../shared/components';

type LoginProps = {
  isLogin?: boolean;
};

const Login = ({ isLogin = true }: LoginProps) => {
  return (
    <>
      <LoginCard isLogin={isLogin} />
    </>
  );
};

export default Login;
