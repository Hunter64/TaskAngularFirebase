import { Component, OnInit } from '@angular/core';
import { Loading } from 'src/app/models/loading';
import { AccessoriesService } from 'src/app/services/accessories.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  public loadingBar: Loading;
  constructor(
    private _accessoriesService: AccessoriesService
  ) { }

  ngOnInit() {
    this.loadingBar = this._accessoriesService.getLoading;
  }

}