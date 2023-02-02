import Link from '../Link';
import { SearchInput } from '../SearchInput';
import { Container, Wrapper } from './styles';
import type { MenuHeaderProps } from './types';
import Image from 'next/image';
import rateflixLogo from '../public/rateflix-logo.png';

export default function MenuHeader({ className }: MenuHeaderProps): JSX.Element {
  return (
    <Container className={className}>
      <Image src={rateflixLogo} width={150} height={20} alt="rateflix-logo" />
      <Wrapper>
        <Link href={'/mylist'} label={'Mis valoraciones'}></Link>
        <SearchInput />
      </Wrapper>
    </Container>
  );
}
