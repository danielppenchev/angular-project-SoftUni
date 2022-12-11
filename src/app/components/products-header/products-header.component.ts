import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.css']
})
export class ProductsHeaderComponent implements OnInit {
  @Output() columnsCountChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<string>();
  @Output() itemsCountChange = new EventEmitter<number>();

  sort = 'desc';
  itemsShowCount = 12;

  constructor() {}

  ngOnInit(): void {}

  onSortUpdated(newSort: string): void {
    const sortTypes: any = {
      'Descending': 'desc',
      'Ascending': 'asc'
    }
    this.sort = sortTypes[newSort];
    this.sortChange.emit(sortTypes[newSort]);
  }

  onShowCountUpdated(newShowCount: number): void {
    this.itemsShowCount = newShowCount;
    this.itemsCountChange.emit(newShowCount);
  }

  onColumnsUpdated(newColumns: number): void {
    this.columnsCountChange.emit(newColumns);
  }

}
