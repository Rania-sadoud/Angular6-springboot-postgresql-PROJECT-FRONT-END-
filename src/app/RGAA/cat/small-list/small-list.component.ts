import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


import { FileModel } from '../../../filecat';
import { FilecatService } from '../../../filecat.service';
@Component({
  selector: 'app-small-list',
  templateUrl: './small-list.component.html',
  styleUrls: ['./small-list.component.scss']
})
export class SmallListComponent implements OnInit {

  cats: Observable<FileModel[]>;
  /**lien: string="../../../../assets/images/RGAA/";**/
  constructor(private catservice: FilecatService) { }

  ngOnInit() {
    this.reloadData();
  }

 /** deletecats() {
    this.catservice.deleteAll()
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log('ERROR: ' + error));
  }
**/
  reloadData() {
    this.cats = this.catservice.getCatListFile();
  }
}
