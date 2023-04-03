import { AvatarProps } from './Avatar.type';
import { AvatarImg, AvatarRoot } from './Avatar.style';

export default function Avatar({
  variant = 'rounded',
  src,
  imgProps,
  alt,
  size = 'medium',
  children,
}: AvatarProps) {
  return (
    <AvatarRoot variant={variant} size={size}>
      {children ? children : <AvatarImg src={src} alt={alt} {...imgProps} />}
    </AvatarRoot>
  );
}
