import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './tvshow.component.html',
})
export class TvShowComponent {
  //   showName: string = 'The Flash';
  //   showImg: string =
  //     'https://static.tvmaze.com/uploads/images/medium_portrait/296/740329.jpg';
  apiUrl: string = 'http://api.tvmaze.com/shows/';
  showId?: number; //nullable
  showName: string = '';
  showImg: string = '';

  cast: any;

  constructor(private http: HttpClient) {}
  loadShow(): void {
    if (this.showId) {
      this.http.get<any>(this.apiUrl + this.showId).subscribe((data: any) => {
        this.showName = data.name;
        this.showId = data.id;
        this.showImg = data.image.medium;
      });
      this.http
        .get<any[]>(`http://api.tvmaze.com/shows/${this.showId}/cast`)
        .subscribe((data: any[]) => (this.cast = data));
    }
  }
}
