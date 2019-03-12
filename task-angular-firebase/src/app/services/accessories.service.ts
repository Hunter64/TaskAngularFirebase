import { Injectable } from '@angular/core';
import { Loading } from '../models/loading';

@Injectable({
  providedIn: 'root'
})
export class AccessoriesService {
  private loadingBar: Loading;
  
constructor() {
  this.loadingBar = new Loading();
 }

  public hideLoading() {
    this.loadingBar.active = true;
  }
  public showLoading() {
    this.loadingBar.active = false;
  }
  public get getLoading(): Loading {
    return this.loadingBar;
  }
}

