import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-city',
  templateUrl: './city.page.html',
  styleUrls: ['./city.page.scss'],
})
export class CityPage implements OnInit {

  id: any;
  cities: any = [];
  name: string = "";
  description: string = ""; 
  image: string = "";
  constructor(
    private http: HttpClient,
    private activatedRouter: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.activatedRouter.snapshot.paramMap.get('id');
    console.log("id", this.id);

    this.getCities().subscribe(res => {
      console.log("Res", res);
      this.cities = res;
      this.name = this.cities[this.id].name;
      this.description = this.cities[this.id].desc;
      this.image = this.cities[this.id].image;
    })
  }

  getCities() {
    return this.http.get("assets/files/cities.json")
      .pipe(
        map((res: any) => {
          return res.data;
        })
      )
  }

}
