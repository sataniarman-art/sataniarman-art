import 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src?: string;
          alt?: string;
          'auto-rotate'?: boolean;
          'camera-controls'?: boolean;
          'shadow-intensity'?: string;
          exposure?: string;
          'camera-orbit'?: string;
          'camera-target'?: string;
          poster?: string;
          'rotation-per-second'?: string;
          'field-of-view'?: string;
          'disable-zoom'?: boolean;
          'interaction-prompt'?: string;
          'ar-status'?: string;
        },
        HTMLElement
      >;
    }
  }
}

export {};
