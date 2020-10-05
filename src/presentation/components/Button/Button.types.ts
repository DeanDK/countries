type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonStyledProps = {
  width: number;
};

export type Props = ButtonProps &
  ButtonStyledProps & {
    label: string;
  };
