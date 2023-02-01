import { Container } from './styles';
import NextLink from 'next/link';
import type { LinkProps } from './types';

export default function Link({ href, label, className }: LinkProps): JSX.Element {
  return (
    <NextLink href={href} passHref>
      <Container as="a" className={className}>
        {label}
      </Container>
    </NextLink>
  );
}
