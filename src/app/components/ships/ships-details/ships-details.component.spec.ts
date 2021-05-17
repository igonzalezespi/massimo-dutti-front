import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { Component, Pipe, PipeTransform } from '@angular/core';
import { ShipsDetailsComponent } from './ships-details.component';

describe('ShipsDetailsComponent', () => {
  let component: ShipsDetailsComponent;
  let fixture: ComponentFixture<ShipsDetailsComponent>;

  @Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'pagination-controls',
    template: '<p>Mock Pagination controls Component</p>',
  })
  class MockPaginationControlsComponent {}
  @Pipe({ name: 'paginate' })
  class MockPipe implements PipeTransform {
    transform(value: number): number {
      // Do stuff here, if you want
      return value;
    }
  }

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ShipsDetailsComponent, MockPaginationControlsComponent, MockPipe],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipsDetailsComponent);
    component = fixture.componentInstance;
    component.dataList = {};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
