import { Component, OnInit } from '@angular/core';
import { GotService } from 'src/app/services/got.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public gotService: GotService
  ) { }
  
  items: any = null;

  async ngOnInit() {
    this.gotService.listsAllCharacters().subscribe((data: any) => {
      this.items = data;
    });
  }

}
