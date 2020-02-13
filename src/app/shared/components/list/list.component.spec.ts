import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSort } from '@angular/material/sort';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should emit the text filter when search bar update', () => {
    spyOn(component.filterItems, 'emit');

    component.updateSearchBarFilter('test');

    expect(component.filterItems.emit).toHaveBeenCalledWith({ text: 'test' });
  });

  it('should emit the text filter when sort column update', () => {
    spyOn(component.filterItems, 'emit');
    const sort = new MatSort();

    component.updateSort(sort);

    expect(component.filterItems.emit).toHaveBeenCalledWith({ sort });
  });
});
