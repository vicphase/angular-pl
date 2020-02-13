import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  ViewChild
} from '@angular/core';

/**
 * Component used in our list to lazy load our items
 */
@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VirtualScrollComponent<T = any> {
  /**
   * Viewport of our virtual scroll
   */
  @ViewChild(CdkVirtualScrollViewport) viewport: CdkVirtualScrollViewport;
  /**
   * Template of each row inside the virtual scroll
   */
  @ContentChild(TemplateRef) childRowTemplate: TemplateRef<any>;
  /**
   * Height of the virtual scroll component
   */
  @Input() height = '50vh';
  /**
   * When value is set to true the component will not request more items
   */
  @Input() ignoreNextBatch: boolean;
  /**
   * Items displayed in the component
   */
  @Input() list: T[] = [];
  /**
   * Event emitted when the user reached the bottom of the
   * component to get more items
   */
  @Output() getNextBatch = new EventEmitter<void>();

  /**
   * Emit the getNextBatch event when the user reaches the bottom of the virtual scroll
   */
  nextBatch(): void {
    if (this.ignoreNextBatch) {
      return;
    }

    const { end } = this.viewport.getRenderedRange();
    const total = this.viewport.getDataLength();

    if (end === total && end > 0 && total > 0) {
      this.getNextBatch.emit();
    }
  }
}
