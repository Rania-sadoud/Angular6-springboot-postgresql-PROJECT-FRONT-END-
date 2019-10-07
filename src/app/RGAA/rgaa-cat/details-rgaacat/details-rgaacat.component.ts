import { Component, OnInit, Input } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Rgaa } from '../rgaa-cat';
import { RgaaCatService } from '../rgaa-cat.service';
import { SmallListRgaacatComponent } from '../small-list-rgaacat/small-list-rgaacat.component';


@Component({
  selector: 'app-details-rgaacat',
  templateUrl: './details-rgaacat.component.html',
  styleUrls: ['./details-rgaacat.component.scss']
})
export class DetailsRgaacatComponent implements OnInit {

  @Input() rgaa: Rgaa;
 //lien: string="../../../../../assets/images/RGAA/";
  lien: string="../../../../../../upload/RGAA/";
  closeResult: string;
  constructor(private modalService: NgbModal, private rgaaService: RgaaCatService, private listComponent: SmallListRgaacatComponent ) { }

  ngOnInit() {
  }
  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  
  /**deleteCat() {
    this.rgaaService.deleteCat(this.cat.id)
      .subscribe(
        data => {
          console.log(data);
          this.listComponent.reloadData();
        },
        error => console.log(error));
  }**/

}
