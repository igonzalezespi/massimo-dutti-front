import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ShipsService } from 'src/app/services/ships.service';

import { BehaviorSubject } from 'rxjs';
import { ShipsComponent } from './ships.component';




describe('ShipsComponent', () => {
  let component: ShipsComponent;
  let fixture: ComponentFixture<ShipsComponent>;
  const serviceMock = {
    getShips: () => new BehaviorSubject([]),

  };


  @Component({
    selector: 'app-ships-details',
    template: '<p>Mock Ship Details</p>',
  })
  class MockShipDetailsComponent {
    @Input() dataList: any;
  }

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ShipsComponent, MockShipDetailsComponent],
      providers: [
        { provide: ShipsService, useValue: serviceMock },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
