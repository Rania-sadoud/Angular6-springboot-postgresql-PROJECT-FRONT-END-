import { Component, OnInit, ViewChild } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router} from '@angular/router';


import { Cat } from '../../../cat';
import { CatService } from '../../../cat.service';
import { FileModel } from '../../../filecat';
import { FilecatService } from '../../../filecat.service';
import { SmallListComponent } from '../small-list/small-list.component';
import { UploadFileService } from '../../../upload/upload-file.service';
import { HttpResponse, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-list-cat',
  templateUrl: './list-cat.component.html',
  styleUrls: ['./list-cat.component.scss']
})
export class ListCatComponent implements OnInit {

  /*************************************************************/
  /*				variables definition 		*/
  /*************************************************************/
selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  closeResult: string;
validateur:boolean=false;
role:string;
user:string;
  showMsg: boolean = false;
   /**cat: Cat = new Cat();**/
   cat: FileModel = new FileModel();
  submitted = false;
  
   catarray: Cat[];
  /*************************************************************/
  /*		the constructor 		*/
  /*************************************************************/
  constructor(private modalService: NgbModal, private catService: CatService, 
    private uploadService: UploadFileService, private router: Router) { }

 @ViewChild(SmallListComponent) private mychild : SmallListComponent;
 refresh (){
   this.mychild.reloadData();
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
    this.cat = new FileModel();
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

  /*************************************************************/
  /*				was here by default				*/
  /*************************************************************/
  ngOnInit() {
     if (JSON.parse(localStorage.getItem('user')) !== null) {

      
        this.user=JSON.parse(localStorage.getItem('user')).login;
        this.role=JSON.parse(localStorage.getItem('role')).role;
      
       if (this.role==="validateurRgm") {
            this.validateur=true;
          }
  }
   }

  /**================ pour la création dne nouvelle catégorie'u======================== */
  /**newCat(): void {
    this.submitted = false;
    this.showMsg = false;
    this.cat = new Cat();
  }**/
  /*************************************************************/
  /*				enregistrer la categorie 				*/
  /*************************************************************/
  /**save() {
 
    this.catService.createCat(this.cat)
      .subscribe(data => console.log(data), error => console.log(error));
    this.cat = new Cat();
  }**/
  save2() {
 
    this.catService.createCatfile(this.cat)
      .toPromise().then(data => {console.log(data);
      this.refresh();
      this.modalService.dismissAll();
        this.router.navigate(['/RGAA/catégories']);}, error => console.log(error));
    this.cat = new FileModel();
      
  }
  /*************************************************************/
  /*    enregistrer le fichier dans les fichier de cat  	*/
  /*************************************************************/
  
   selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  
  filevent(event)
  {
  	this.cat.lien= event.target.files[0].name;
  }
/**
  upload() {
    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });

    this.selectedFiles = undefined;
  }
   uploadcat() {

    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.pushFileCatToStorage(this.currentFileUpload, this.cat).subscribe(data => console.log(data), error => console.log(error));
    this.cat = new Cat();
    this.selectedFiles = undefined;
  }**/
  
   /** updateActive() {
    this.catService.updateFile({name : "rania"})
      .subscribe(
        data => {
          console.log(data);
          this.cat = data as Cat;
        },
        error => console.log(error));
  }**/
  
   
  /*************************************************************/
  /*				form submission 				*/
  /*************************************************************/
  onSubmit(content, oldcontent) {
    this.submitted = true;
    this.save2();
  /**  this.upload();**/
   /** this.updateActive();**/
    /**this.modalService.dismissAll();
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });**/


  }
/** close the 2 modals confirmaon and creationti */
 /* CloseBoth(content, oldcontent) {

  window.location.reload();
    this.modalService.dismissAll();
  }*/


  
}