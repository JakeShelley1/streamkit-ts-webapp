import { ReactComponent as TwitchSVG } from '../../assets/TwitchGlitchBlackOps.svg';
import { Loading } from '.';

type ButtonProps = {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
};

const Button = ({
  className,
  children,
  onClick,
  disabled = false,
  loading = false,
}: ButtonProps) => {
  let style;

  if (disabled) {
    style = {
      backgroundColor: '#CCCCCC',
      color: '#eee',
      cursor: 'default',
    };
  }

  return (
    <button
      className={`${
        disabled ? '' : 'darken'
      } pv2 ph3 b br3 bn pointer ${className}`}
      onClick={onClick}
      style={style}
    >
      {loading ? (
        <div className="relative">
          <div className="hidden">{children}</div>
          <div className="absolute flex items-center justify-center top-0 bottom-0 right-0 left-0">
            <Loading />
          </div>
        </div>
      ) : (
        children
      )}
    </button>
  );
};

const TwitchButton = ({
  className,
  children,
  onClick,
  disabled = false,
  loading = false,
}: ButtonProps) => {
  return (
    <Button
      disabled={disabled}
      loading={loading}
      onClick={onClick}
      className={`${className} bg-primary`}
    >
      <div className="white flex relative h2 flex-row items-center justify-center">
        <TwitchSVG className="absolute left-0" style={{ height: '30px' }} />
        <div className="tc">{children}</div>
      </div>
    </Button>
  );
};

export { Button, TwitchButton };
