import { forwardRef, useId } from 'react';
import { Container, CustomInput } from './styles';
import type { SearchInputProps } from './types';
import { BsSearch } from 'react-icons/bs';
import theme from '../../styles/theme';

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(({ name, placeholder, className }, ref) => {
  const inputId = useId();

  return (
    <Container className={className}>
      <CustomInput ref={ref} id={inputId} name={name} placeholder={placeholder} />
      <BsSearch size={20} color={theme.light.colors.supportRedLight} />
    </Container>
  );
});

SearchInput.displayName = 'SearchInput';
