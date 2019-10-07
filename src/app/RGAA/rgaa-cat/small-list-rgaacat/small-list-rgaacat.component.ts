import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { Rgaa } from '../rgaa-cat';
import { RgaaCatService } from '../rgaa-cat.service';
@Component({
  selector: 'app-small-list-rgaacat',
  templateUrl: './small-list-rgaacat.component.html',
  styleUrls: ['./small-list-rgaacat.component.scss']
})
export class SmallListRgaacatComponent implements OnInit {
  rgaas: Observable<Rgaa[]>;
  @Input() rgaa_catid_child: string;
  constructor(private rgaaService: RgaaCatService) { }

  ngOnInit() {
    this.reloadData();
  }

 
  reloadData() {
   this.rgaas = this.rgaaService.getRgaaList(this.rgaa_catid_child);
  }
}

