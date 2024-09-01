import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Subject, takeUntil } from 'rxjs';

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

@Directive({
  selector: '[appClick]',
  standalone: true,
})
export class TrackClickDirective implements OnInit, OnDestroy {
  @Input() appClick = '';
  @Input() trackCategory: string | undefined;

  private destroyed$ = new Subject<void>();

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    if (this.appClick) {
      fromEvent(this.elementRef.nativeElement, 'click').pipe(takeUntil(this.destroyed$))
        .subscribe(() => {
          this.track();
        });
    }
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  private track() {
    window.gtag('event', 'Clicked', {
      event_category: this.trackCategory || 'Link',
      event_label: this.appClick,
    });
  }
}
