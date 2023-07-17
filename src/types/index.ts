import { ReactNode } from 'react';

import { Translation } from '@/app/i18n/client';

export interface LanguageProps {
  lng: keyof Translation;
}

export interface PageProps {
  params: LanguageProps;
}

export interface ErrorBoundaryProps {
  children: ReactNode;
}
export interface ErrorBoundaryState {
  hasError: boolean;
  error?: null | Error;
  errorInfo?: null | { componentStack: string };
}
