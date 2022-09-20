type LoadingProps = {
  large?: boolean;
};

const Loading = ({ large = false }: LoadingProps) => {
  return <div className={`${large ? 'large-lds-dual-ring' : 'lds-dual-ring'}`}></div>;
};

export { Loading };
