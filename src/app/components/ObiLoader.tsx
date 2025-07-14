'use client';

import { useEffect } from 'react';
import type { ObiAssistantConfig } from 'obi-loader';

interface ObiLoaderProps {
  config: Partial<ObiAssistantConfig>;
}

export default function ObiLoader({ config }: ObiLoaderProps) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const initializeObi = async () => {
      try {
        const { initObi } = await import('obi-loader');
        if (initObi && config) {
          initObi(config as ObiAssistantConfig);
        }
      } catch (error) {
        console.error('Failed to initialize Obi loader:', error);
      }
    };

    initializeObi();
  }, []);

  return null;
}