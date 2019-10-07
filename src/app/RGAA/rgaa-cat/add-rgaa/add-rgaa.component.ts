import { Component, OnInit } from '@angular/core';


import { ActivatedRoute, Router} from '@angular/router';


import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { Rgaa } from '../rgaa-cat';
import { RgaaCatService } from '../rgaa-cat.service';
import { SmallListRgaacatComponent } from '../small-list-rgaacat/small-list-rgaacat.component';
import { HttpResponse, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-add-rgaa',
  templateUrl: './add-rgaa.component.html',
  styleUrls: ['./add-rgaa.component.scss']
})
export class AddRgaaComponent implements OnInit {

  rgaa_catid_list_add: string ;
  selectedFiles: FileList;
  submitted = false;
  rgaa: Rgaa = new Rgaa();
  closeResult: string;
  showMsg: boolean = false;
  
  constructor(private route : ActivatedRoute, private modalService: NgbModal, private rgaaService: RgaaCatService,
  					 private router: Router) { }
   

  ngOnInit() {
  	this.route.paramMap.subscribe(params => {
  		this.rgaa_catid_list_add = params.get("rgaa_catid_foradd");})
  }
  
  /*************************************************************/
  /*		open and close the modal		*/
  /*************************************************************/
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

 
   saveRGAA() {
 
    /*this.rgaa.rgaacatid= this.rgaa_catid_list_add;
    this.rgaaService.createRgaa(this.rgaa)
      .subscribe(data => console.log(data), error => console.log(error));
    this.rgaa = new Rgaa();*/
    this.rgaa.rgaacatid= this.rgaa_catid_list_add;
    this.rgaaService.createRgaa(this.rgaa)
      .toPromise().then(data => {console.log(data);
        this.router.navigate(['/RGAA/rgaaofcat/', this.rgaa_catid_list_add]);}, error => console.log(error));
    this.rgaa = new Rgaa();
  }
  /*************************************************************/
  /*    enregistrer le fichier dans les fichier de cat  	*/
  /*************************************************************/
 filevent2(event)
  {
    this.rgaa.prodlien= event.target.files[0].name;
    /**this.rgaa.rgaacatid= this.rgaa_id;**/
  }
  
  filevent(event)
  {
  	this.rgaa.lien= event.target.files[0].name;
  	/**this.rgaa.rgaacatid= this.rgaa_catid_list_add;**/
  }


   
  /*************************************************************/
  /*				form submission 				*/
  /*************************************************************/
 /* onSubmit(content) {
    this.submitted = true;
    this.saveRGAA();
     this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  /**  this.router.navigate(['/RGAA/rgaaofcat/', this.rgaa_catid_list_add]).then(() => {window.location.reload();});**
  
  }*/
  onSubmit(content) {
    this.submitted = true;
    this.saveRGAA();
     /*this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });**/
  // this.router.navigate(['/RGAA/rgaaofcat/', this.rgaa_catid_list_add]);
  }
  RefreshPage()
  {
  	this.router.navigate(['/RGAA/rgaaofcat/', this.rgaa_catid_list_add]).then(() => {window.location.reload();});
  }
}


