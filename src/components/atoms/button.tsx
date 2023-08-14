// External Imports

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  target?: string;
  onClick?: () => void;
};

const Button = ({
  href,
  children,
  target,
  onClick,
}: ButtonProps): JSX.Element => {
  return (
    <a href={href} target={target} onClick={onClick}>
      <div id="jart-btn">{children}</div>
    </a>
  );
};

export default Button;
