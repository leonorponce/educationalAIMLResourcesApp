import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css'],
  providers: [ResourceService]
})
export class ResourcesComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }
    
}

 