import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SpotifyWebProvider {

  constructor(public http: HttpClient) {
    console.log('Hello SpotifyWebProvider Provider');
  }

}
