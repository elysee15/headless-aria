import styled from '@emotion/styled';
import { avatarSize, avatarVariant } from './Avatar.constant';
import { Size as SizeProps, Variant as VariantProps } from './Avatar.type';

type AvatarRootProps = {
  variant: VariantProps
  size: SizeProps;
}

export const AvatarRoot = styled.div<AvatarRootProps>((props) => ({
    borderRadius: avatarVariant[props.variant],
    alignItems: `center`,
    justifyContent: `center`,
    verticalAlign: `middle`,
    overflow: `hidden`,
    background: `#d3d3d3`,
    ...avatarSize[props.size],
  }));

export const AvatarImg = styled.img(() => ({
  width: `100%`,
  height: `100%`,
  objectFit: `cover`,
  borderRadius: `inherit`,
}));
