import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { ActivatedRoute, Router} from '@angular/router';


import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


import { Rgaa } from '../rgaa-cat';
import { RgaaCatService } from '../rgaa-cat.service';
import { HttpResponse, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-rgaa-infos-finale',
  templateUrl: './rgaa-infos-finale.component.html',
  styleUrls: ['./rgaa-infos-finale.component.scss']
})
export class RgaaInfosFinaleComponent implements OnInit {
 // lien: string="../../../../../assets/images/RGAA/";
 lien: string="../../../../../../upload/RGAA/";
  rgaa_idinfos: string ;
  rgaa_object:  Rgaa = new Rgaa();
    submitted = false;
rgaacatid: string;
validateur:boolean=false;
role:string;
user:string;
    closeResult: string;

  showMsg: boolean = false;
  constructor(private route : ActivatedRoute,   
    private modalService: NgbModal, private rgaaService: RgaaCatService,
     private router: Router) { }
   

  ngOnInit() {
  	this.route.paramMap.subscribe(params => {
  		this.rgaa_idinfos = params.get("rgaa_id");
      this.rgaacatid= params.get("rgaacatid");
       if (JSON.parse(localStorage.getItem('user')) !== null) {

      
        this.user=JSON.parse(localStorage.getItem('user')).login;
        this.role=JSON.parse(localStorage.getItem('role')).role;
      
       if (this.role==="validateurRgm") {
            this.validateur=true;
          }
  }

    });
  		this.reloadRgaaInfos();
  }
   open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.submitted = false;
    this.showMsg = false;
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
 RefreshPage()
  {
    this.router.navigate(['/RGAA/rgaaofcat/', this.rgaa_object.rgaacatid]).then(() => {window.location.reload();});
  }
  deleteRgaa() {
    this.rgaaService.deleteRgaa(this.rgaa_object.id)
     .toPromise().then(data => {console.log(data);
        this.modalService.dismissAll();
        this.router.navigate(['/RGAA/rgaaofcat/', this.rgaa_object.rgaacatid]);}, 
        error => console.log(error));
      //  this.router.navigate(['/RGAA/rgaaofcat/', this.rgaa_object.rgaacatid]).then(() => {window.location.reload();});
 
  }
  deleteRgaa1() {
    this.deleteRgaa();
    // this.router.navigate(['/RGAA/rgaaofcat/', this.rgaa_object.rgaacatid]);
  }
  reloadRgaaInfos() {
  /** this.rgaa_object = this.rgaaService.getRgaaInfos(this.rgaa_idinfos);**/
    this.rgaaService.getRgaaInfos(this.rgaa_idinfos)
      .subscribe(rgaa_objecttest => this.rgaa_object = rgaa_objecttest);
  }

}
