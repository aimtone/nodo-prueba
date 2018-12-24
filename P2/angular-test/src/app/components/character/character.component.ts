import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GotService } from 'src/app/services/got.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  id: string = "";
  item: any = null;
  constructor(
    private route: ActivatedRoute,
    public gotService: GotService
  ) {
    this.route.params.subscribe(
      params => this.id = params.id
    );
  }

  ngOnInit() {
    this.gotService.getACharacter(this.id).subscribe((data: any) => {
      this.item = data;
      console.log(this.item);
    });
  }

}
