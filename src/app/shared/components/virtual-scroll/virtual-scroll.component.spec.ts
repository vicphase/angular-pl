import { ScrollingModule } from '@angular/cdk/scrolling';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualScrollComponent } from './virtual-scroll.component';

describe('VirtualScrollComponent', () => {
  let component: VirtualScrollComponent;
  let fixture: ComponentFixture<VirtualScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ScrollingModule],
      declarations: [VirtualScrollComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
