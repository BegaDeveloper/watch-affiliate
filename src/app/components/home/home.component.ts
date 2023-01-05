import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  ourStore: string = `Welcome to GrexWatches! We offer a wide selection of watches for both men and women, including luxury and modern options.
Our collection of watches for men includes classic and sophisticated timepieces from top brands. Whether you're looking for a casual watch for everyday wear or a dress watch for special occasions, we have something to suit your style.
For the ladies, we have a range of elegant and fashionable watches to choose from. Our collection of watches includes something for everyone, from luxury brands to more affordable options.`;
}
