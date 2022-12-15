import * as S from './styles'

interface ButtonProps {
  buttonType: 'normal' | 'rounded';
  isActive?: boolean;
  customBackground?: string;
  children: React.ReactNode;
  fontWeight?: string;
  fontSize?: string;
}

const Button = ({buttonType, isActive, customBackground, children, fontWeight, fontSize}: ButtonProps) => {
  return (
    <S.Button
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
