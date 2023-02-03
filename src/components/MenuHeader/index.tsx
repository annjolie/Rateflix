import Link from '../Link';
import NextLink from 'next/link';
import { SearchInput } from '../SearchInput';
import { Container, Wrapper } from './styles';
import Image from 'next/image';

export default function MenuHeader(): JSX.Element {
  return (
    <Container>
      <NextLink href={'/'}>
        <Image src="/rateflix-logo.png" width={180} height={100} alt="rateflix-logo" />
      </NextLink>
      <Wrapper>
        <Link href={'/mylist'} label={'Mis valoraciones'} />
        <SearchInput />
      </Wrapper>
    </Container>
  );
}
