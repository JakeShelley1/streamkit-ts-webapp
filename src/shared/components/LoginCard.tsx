import { useState } from 'react';
import { Link, useLocation, matchPath } from 'react-router-dom';
import { TwitchButton } from '../../shared/components';
import LogoPNG from '../../assets/180.png';

type LoginCardProps = {
  isLogin?: boolean;
};

const LoginCard = ({ isLogin = true }: LoginCardProps) => {
  const { pathname } = useLocation();
  const [_isLogin, setIsLogin] = useState(isLogin);
  const shouldUseLocalState = !['/login', '/signup'].includes(pathname);

  console.log(pathname);
  console.log(shouldUseLocalState);

  return (
    <div
      className="bg-secondary center tc mt4 pv5 ph5 br4 bg-secondary shadow"
      style={{ maxWidth: '28rem' }}
    >
      <img
        src={LogoPNG}
        className="br3"
        style={{ height: '64px', width: '64px' }}
      />
      <h2 className="mb3">Login to StreamKit</h2>
      <div className="mb4">Join 5000+ content creators</div>
      <TwitchButton onClick={() => console.log('flag')} className="mb4 w-100">
        Continue with Twitch
      </TwitchButton>
      <div className="mb4">
        Need help?{' '}
        <a
          rel="noreferrer"
          target="_blank"
          className="primary b link"
          href="https://discord.gg/GpBdFgtkAj"
        >
          Join our Discord!
        </a>
      </div>
      <div className="w-100 bb b--dark-gray mb4"></div>
      <div className="mw5 tc center lh-copy f7 moon-gray">
        {_isLogin ? (
          <Link
            onClick={() => setIsLogin(false)}
            to="/signup"
            className="gray link"
          >
            Sign up for an account
          </Link>
        ) : (
          <>
            By signing up, you agree to our{' '}
            <a className="link gray">Terms of Service</a> and{' '}
            <a className="link gray">Privacy Policy</a>
          </>
        )}
      </div>
    </div>
  );
};

export { LoginCard };
