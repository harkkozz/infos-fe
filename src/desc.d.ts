declare module '*.svg' {
  import * as React from 'react';
  export const ReactComponent: React.FunctionComponent<
    React.PropsWithChildren<React.SVGProps<SVGSVGElement> & { title?: string }>
  >;
}
