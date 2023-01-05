import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  watchesPerPage: number = 30;
  displayWatches: any[];
  searchBrand: string = '';
  constructor(private http: HttpClient, private router: Router) {
    this.http.get('../../../assets/watches.json').subscribe((data) => {
      this.watches = data;
      this.displayWatches = this.watches.slice(0, 30);
    });
  }
  ngOnInit(): void {}

  sortBy: string;

  loadMore() {
    this.displayWatches = this.displayWatches.concat(
      this.watches.slice(
        this.displayWatches.length,
        this.displayWatches.length + 30
      )
    );
  }

  onWatchClick(watch: any) {
    this.router.navigate(['/watch', watch.id]);
  }
}
