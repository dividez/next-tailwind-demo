'use client';

import { useEffect } from 'react';

export function useAnalytics(analyticsId?: string) {
  useEffect(() => {
    if (!analyticsId) return;
    if (window.plausible) return;

    const script = document.createElement('script');
    script.src = `https://plausible.io/js/script.outbound-links.js`;
    script.defer = true;
    script.dataset.domain = analyticsId;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [analyticsId]);
}
