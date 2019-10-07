
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router} from '@angular/router';


import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { FileModel } from '../../../filecat';
import { Rgaa } from '../rgaa-cat';
import { RgaaCatService } from '../rgaa-cat.service';
import { SmallListRgaacatComponent } from '../small-list-rgaacat/small-list-rgaacat.component';
import { HttpResponse, HttpEventType } from '@angular/common/http';

import { CatService } from '../../../cat.service';

@Component({
  selector: 'app-list-rgaacat',
  templateUrl: './list-rgaacat.component.html',
  styleUrls: ['./list-rgaacat.component.scss']
})
export class ListRgaacatComponent implements OnInit {

	/*************************************************************/
  /*				variables definition 		*/
  /*************************************************************/
  selectedFiles: FileList;
   word:string;
  currentFileUpload: File;
  closeResult: string;
  submitted = false;
   rgaa: Rgaa = new Rgaa();
validateur:boolean=false;
role:string;
user:string;
  objetcat:  FileModel = new FileModel();

   rgaa_catid_list: string ;

  constructor(private route : ActivatedRoute, private modalService: NgbModal,
   private rgaaService: RgaaCatService, private catService: CatService,
    private router: Router) { }
   

  ngOnInit() {
  	this.route.paramMap.subscribe(params => {
  		this.rgaa_catid_list = params.get("rgaa_catid");});
    this.reloadCatInfos();
    if (JSON.parse(localStorage.getItem('user')) !== null) {

      
        this.user=JSON.parse(localStorage.getItem('user')).login;
        this.role=JSON.parse(localStorage.getItem('role')).role;
      
       if (this.role==="validateurRgm") {
            this.validateur=true;
          }
  }
  }
 
reloadCatInfos() {
  /** this.rgaa_object = this.rgaaService.getRgaaInfos(this.rgaa_idinfos);**/
    this.rgaaService.getCatInfos(this.rgaa_catid_list)
      .subscribe(cat_objecttest => this.objetcat = cat_objecttest);
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
   
    this.rgaa = new Rgaa();
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
 
    this.rgaaService.createRgaa(this.rgaa)
      .subscribe(data => console.log(data), error => console.log(error));
    this.rgaa = new Rgaa();
  }
  /*************************************************************/
  /*    enregistrer le fichier dans les fichier de cat  	*/
  /*************************************************************/
 
  
  filevent(event)
  {
  /**	this.rgaa.lien_rgaa= event.target.files[0].name;
  	this.rgaa.rgaacatid= this.rgaa_catid_list;**/
  }


   
  /*************************************************************/
  /*				form submission 				*/
  /*************************************************************/
  onSubmit(content, oldcontent) {
    this.submitted = true;
    this.saveRGAA();
    this.modalService.dismissAll();
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });


  }
/** close the 2 modals confirmaon and creationti */
  /**CloseBoth(content, oldcontent) {

  window.location.reload();
    this.modalService.dismissAll();
  }**/
  deletecat() {
    this.catService.deleteCat(this.objetcat.id)
     .toPromise().then(data => {console.log(data);
        this.modalService.dismissAll();
        this.router.navigate(['/RGAA/catégories']);}, 
        error => console.log(error));
      //  this.router.navigate(['/RGAA/rgaaofcat/', this.rgaa_object.rgaacatid]).then(() => {window.location.reload();});
 
  }
    updatecat() {
 
    this.rgaaService.updatecat(this.objetcat)
      .toPromise().then(data => {console.log(data);
     // this.refresh();
     // this.reloadCatInfos();
      this.modalService.dismissAll();
      this.router.navigate(['/RGAA/catégories']);
      }, error => console.log(error));
    this.objetcat = new FileModel();
      
  }
  /*************************************************************/
  /*    enregistrer le fichier dans les fichier de cat    */
  /*************************************************************/
  
   selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  
  fileventcat(event)
  {
    this.objetcat.lien= event.target.files[0].name;
  }

   
  /*************************************************************/
  /*        form submission         */
  /*************************************************************/
  onSubmitcat() {
    this.submitted = true;
    this.updatecat();
  }
}