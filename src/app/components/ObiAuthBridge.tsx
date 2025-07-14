'use client';

import { useEffect } from 'react';
import type { ObiAssistantConfig } from 'obi-loader';

type ObiAuthBridgeProps = {
  isLoggedIn?: bool,
}

export default function ObiAuthBridge({ isLoggedIn }: ObiAuthBridgeProps) {
  useEffect(() => {
    if (typeof window === 'undefined' || !window.ObiSDK) return;

    if (!isLoggedIn) {
      window.ObiSDK("update", {
        isActive: false,
      })
    } else {
      window.ObiSDK("update", {
        isActive: true,
      })
    }
  }, [isLoggedIn]);

  return null;
}
