import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { ActivatedRoute, Router} from '@angular/router';

import { Rgaa } from '../../rgaa-cat';
import { RgaaCatService } from '../../rgaa-cat.service';
@Component({
  selector: 'app-modif-rgaa',
  templateUrl: './modif-rgaa.component.html',
  styleUrls: ['./modif-rgaa.component.scss']
})
export class ModifRgaaComponent implements OnInit {
rgaa_id: string;
rgaacatid: string ;
selectedFiles: FileList;
  submitted = false;

    closeResult: string;

  showMsg: boolean = false;
  rgaa_objectmodif:  Rgaa = new Rgaa();
  constructor(private route : ActivatedRoute, private modalService: NgbModal,
   private rgaaService: RgaaCatService, private router: Router) { }

  ngOnInit() {

  	this.route.paramMap.subscribe(params => {
  		this.rgaa_id = params.get("rgaa_idmodif");
      this.rgaacatid=params.get("rgaacatid");});
  	this.reloadRgaaInfosmodif();

  }
 reloadRgaaInfosmodif() {
  /** this.rgaa_object = this.rgaaService.getRgaaInfos(this.rgaa_idinfos);**/
    this.rgaaService.getRgaaInfosModif(this.rgaa_id)
      .subscribe(rgaa_objecttest => this.rgaa_objectmodif = rgaa_objecttest);
  }
/*************************************************************/
  /*    open and close the modal    */
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

 
   updateRGAA() {
   this.rgaaService.createRgaaModif(this.rgaa_objectmodif)
     .toPromise().then(data => {console.log(data);
        this.router.navigate(['/RGAA/rgaaofcat/', this.rgaacatid]);}, error => console.log(error));
    
      this.rgaa_objectmodif = new Rgaa();

  }
    
  
  /*************************************************************/
  /*    enregistrer le fichier dans les fichier de cat    */
  /*************************************************************/
 
  
  filevent(event)
  {
    this.rgaa_objectmodif.lien= event.target.files[0].name;
    /**this.rgaa.rgaacatid= this.rgaa_id;**/
  }

  filevent2(event)
  {
    this.rgaa_objectmodif.prodlien= event.target.files[0].name;
    /**this.rgaa.rgaacatid= this.rgaa_id;**/
  }

   
  /*************************************************************/
  /*        form submission         */
  /*************************************************************/
  onSubmit(content) {
    this.submitted = true;
    this.updateRGAA();
    /** this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });**/
   
  }
  RefreshPage()
  {
    this.router.navigate(['/RGAA/rgaaofcat/', this.rgaacatid]).then(() => {window.location.reload();});
  }
}



