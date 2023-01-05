import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-watch-preview',
  templateUrl: './watch-preview.component.html',
  styleUrls: ['./watch-preview.component.scss'],
})
export class WatchPreviewComponent implements OnInit {
  watches: any[] = [];
  watch: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.http.get('../../../../assets/watches.json').subscribe((data: any) => {
      this.watches = data;
      const id = this.route.snapshot.paramMap.get('id');
      const obj = this.watches.filter((el: any) => el.id == id);

      obj.forEach((el: any) => {
        this.watch = el;
      });
    });
  }
}
