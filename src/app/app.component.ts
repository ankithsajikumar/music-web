import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'entespotify';
  tracks = new Array<any>();
  constructor(private http: HttpClient) {}
  public getUsers(): Observable<any> {
    const url = 'https://reqres.in/api/users?page=1';
    return this.http.get<any>(url);
  }
  ngOnInit(): void {
    this.getUsers().subscribe(response => this.tracks = response);
    console.log("tracks :"+this.tracks);
  }
}
