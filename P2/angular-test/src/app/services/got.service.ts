import { Injectable } from '@angular/core';
import { MainService } from './main.service';

@Injectable({
  providedIn: 'root'
})
export class GotService extends MainService {

  
  listsAllCharacters() {
    //return this.http.get(this.baseUrl + "/characters", { headers: this.headers });
    return this.http.get(this.baseUrl + "/characters");
  }

  getACharacter(id: string) {
    return this.http.get(this.baseUrl + "/characters/byId/" + id);
  }

  

}
