import * as S from './styles'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  buttonType: 'normal' | 'rounded';
  isActive?: boolean;
  customBackground?: string;
  children: React.ReactNode;
  fontWeight?: string;
  fontSize?: string;
}

const Button = ({buttonType, isActive, customBackground, children, fontWeight, fontSize, onClick}: ButtonProps) => {
  return (
    <S.Button
      onClick={onClick}
      buttonType={buttonType}
      isActive={isActive}
      customBackground={customBackground}
      fontWeight={fontWeight}
      fontSize={fontSize}>
      {children}
    </S.Button>
  )
}

export default Button;
