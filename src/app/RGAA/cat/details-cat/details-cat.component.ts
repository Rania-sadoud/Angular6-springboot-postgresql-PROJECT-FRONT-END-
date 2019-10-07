import { Component, OnInit, Input } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { FileModel } from '../../../filecat';
import { FilecatService } from '../../../filecat.service';
import { SmallListComponent } from '../small-list/small-list.component';

@Component({
  selector: 'app-details-cat',
  templateUrl: './details-cat.component.html',
  styleUrls: ['./details-cat.component.scss']
})
export class DetailsCatComponent implements OnInit {

 @Input() cat: FileModel;
 //lien: string="../../../../../../assets/images/RGAA/";
lien: string="../../../../../../upload/RGAA/";
  closeResult: string;
  constructor(private modalService: NgbModal, private catService: FilecatService, private listComponent: SmallListComponent ) { }

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
  
  deleteCat() {
    this.catService.deleteCat(this.cat.id)
      .subscribe(
        data => {
          console.log(data);
          this.listComponent.reloadData();
        },
        error => console.log(error));
  }

}
