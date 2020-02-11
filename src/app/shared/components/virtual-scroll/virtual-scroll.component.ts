import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.scss']
})
export class VirtualScrollComponent<T = any> {
  @ViewChild(CdkVirtualScrollViewport) viewport: CdkVirtualScrollViewport;
  @ContentChild(TemplateRef) childRowTemplate: TemplateRef<any>;

  @Input() rowTemplate: TemplateRef<any>;
  @Input() height = '50vh';
  @Input() ignoreNextBatch: boolean;
  @Input() list: T[] = [];
  @Output() getNextBatch = new EventEmitter<void>();

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
