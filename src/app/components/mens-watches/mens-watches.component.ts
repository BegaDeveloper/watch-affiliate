import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-mens-watches',
  templateUrl: './mens-watches.component.html',
  styleUrls: ['./mens-watches.component.scss'],
})
export class MensWatchesComponent implements OnInit {
  panelOpenState = false;
  minPrice: number = 0;
  maxPrice: number = 1000;
  watches: any;
  selectedBrand: any;
  currentPage: number = 1;
  watchesPerPage: number = 20;

  constructor(private http: HttpClient, private currencyPipe: CurrencyPipe) {
    this.http.get('../../../assets/watches.json').subscribe((data) => {
      this.watches = data;
      console.log(this.watches);
    });
  }
  ngOnInit(): void {}

  brands: Array<string> = [
    'Rolex',
    'Patek Philipe',
    'Casio',
    'Richard Mille',
    'Seiko',
    'Quantum',
  ];

  price: Array<number> = [50, 100, 200, 500, 1000, 2000, 5000, 10000, 20000];

  sort: Array<{ id: string; sortBy: string }> = [
    { id: 'lowest', sortBy: 'Price: Low to High' },
    { id: 'highest', sortBy: 'Price: High to Low' },
  ];
  sortBy: string;

  size: Array<any> = [
    { theSize: 'XS 20 - 28' },
    { theSize: 'S 29 - 36' },
    { theSize: 'M 37 - 42' },
    { theSize: 'L 42 - 46' },
    { theSize: 'Other' },
  ];
}
