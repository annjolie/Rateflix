import Link from '../Link';
import NextLink from 'next/link';
import { SearchInput } from '../SearchInput';
import { Container, Wrapper } from './styles';
import Image from 'next/image';
import { useLogic } from './logic';

export default function MenuHeader(): JSX.Element {
  const { register, handleSearchInput } = useLogic();

  return (
    <Container>
      <NextLink href={'/'}>
        <Image src="/rateflix-logo.png" width={180} height={100} alt="rateflix-logo" />
      </NextLink>
      <Wrapper>
        <Link href={'/mylist'} label={'Mis valoraciones'} />
        <SearchInput {...register('searchInput')} onKeyDown={handleSearchInput} />
      </Wrapper>
    </Container>
  );
}
