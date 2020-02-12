import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingServiceMock } from '../../../tests/loading.service.mock';
import { LoadingComponent } from './loading.component';
import { LoadingService } from './loading.service';

describe('LoadingComponent', () => {
  let component: LoadingComponent;
  let fixture: ComponentFixture<LoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoadingComponent],
      providers: [{ provide: LoadingService, useClass: LoadingServiceMock }],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
