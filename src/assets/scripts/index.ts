export {};

interface UniversalEvent {
  event_category: string;
  event_label: string;
  value?: number;
}

declare global {
  interface Window {
    gtag: (event: string, action: string, config: UniversalEvent) => void;
  }
}

(() => {
  function track(element: HTMLElement) {
    const data = element.getAttribute('data-t');
    (window as any).dataLayer?.push({'event': data})
  }

  document.body.onclick = (event: MouseEvent) => {
    const trackedTarget: HTMLElement | null = (event.target as HTMLElement).closest('[data-t]');
    if(trackedTarget) {
      console.log('click', trackedTarget.getAttribute('data-t'));
      window.gtag('event', 'click', {
        event_category: 'click',
        event_label: trackedTarget.getAttribute('data-t') || 'element clicked',
      });
    }
  }
})();
