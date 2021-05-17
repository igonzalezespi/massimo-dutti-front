import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PaginatePipeArgs } from 'ngx-pagination/dist/paginate.pipe';
import { Observable } from 'rxjs';
import { loadShips } from './rx/ship.actions';
import { getShips } from './rx/ship.selectors';
import { ShipsPage } from './ship-page.interface';
import { Ship } from './ship.interface';

declare let $: any;

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.scss'],
})
export class ShipComponent implements OnInit {
  ships$: Observable<ShipsPage>;

  config: PaginatePipeArgs = {
    itemsPerPage: 0,
    currentPage: 1,
    totalItems: null,
  };

  detail: Ship;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.ships$ = this.store.select(getShips);
    this.store.dispatch(loadShips({ page: '1' }));
    this.ships$.subscribe((ships) => {
      this.config.itemsPerPage = ships.results.length;
      this.config.totalItems = ships.count;
    });
  }

  pageChanged(currentPage) {
    this.config.currentPage = currentPage;
    this.store.dispatch(loadShips({ page: String(this.config.currentPage) }));
  }

  openDetails(detail: Ship) {
    $('#exampleModal').modal('show');
    this.detail = detail;
  }
}
