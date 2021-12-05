import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-myhack',
  templateUrl: './myhack.component.html',
  styleUrls: ['./myhack.component.scss']
})
export class MyhackComponent implements OnInit {
hackathons:any;
htitle:any;
hdate:any;
hlink:any;
himage:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('https://temp-name-1.herokuapp.com/hacks').subscribe(data => {
        this.hackathons = data.hackathon;
        console.log(this.hackathons)
    })
  }

}
