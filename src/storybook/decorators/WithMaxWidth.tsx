import type { ComponentType } from 'react';
export default function withMaxWidth(
  maxWidth = 400,
): (Component: ComponentType) => JSX.Element {
  return function ComponentWithMaxWidth(Component) {
    return (
      <div style={{ maxWidth: `${maxWidth}px` }}>
        <Component />
      </div>
    );
  };
}
