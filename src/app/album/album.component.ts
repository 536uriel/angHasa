import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements AfterViewInit {

  index:number = 16;
  myalb:MyAlbom[] = new Array<MyAlbom>(this.index);
  name:string[] = new Array<string>(this.index);
  idi:any[] = new Array<any>(this.index);
  id:any[] = new Array<any>(this.index);
  idp:any[] = new Array<any>(this.index);
  idr:any[] = new Array<any>(this.index);
  val:any[] = new Array<any>(this.index);
  val2:any[] = new Array<any>(this.index);
  val2w:any[] = new Array<any>(this.index);
  val2h:any[] = new Array<any>(this.index);
  changecount = false;
  h:any;
  w:any;
  con:any;
  canvasNum:number = 16;
 
  
  

    constructor() { 
  
   
  
  
      this.h = window.innerHeight;
      this.w = window.innerWidth;
    
  
      for(var i = 0; i < this.myalb.length;i++){
        this.myalb[i] = new MyAlbom();
   
        
      }
  
  
      for(var i = 0;i < this.index;i++){
        this.myalb[i].counter = i;
      }
  
  
  
      for(var i = 0;i < this.index;i++){
        this.val[i] = 150;
      }
  
   
  
    }
  
    
    changeNum(event){
       
      this.myalb.length = event;
      this.index = event;

    }
  
  
    drow(event){
  
      var canvas2 = <HTMLCanvasElement>document.getElementById(parseInt(event.target.id) - this.index +"canvas2");
      var ctx2 = canvas2.getContext("2d");
  
      ctx2.clearRect(0,0,canvas2.width,canvas2.height);
  
      if(this.myalb[parseInt(event.target.id) - this.index].imageSrc){
  
      
        var myimg2 = <HTMLCanvasElement>document.getElementById((parseInt(event.target.id) - this.index).toString());
        ctx2.save();
        ctx2.rotate(this.val2[parseInt(event.target.id) - this.index]);
        ctx2.drawImage(myimg2,0,0,canvas2.width,canvas2.height - 16);
         console.log(this.val2[parseInt(event.target.id) - this.index]);
    }
  
      if(this.name[parseInt(event.target.id) - this.index]){
        
              ctx2.font = "23px arial";
              ctx2.fillText(this.name[parseInt(event.target.id) - this.index],20,150);

  
      }
    }


  
  ngAfterViewInit(){

  
    var counterx = 40;
    var countery = 12;
    var counterxp = 150;
    var counteryp = 270;
  

  
    for(var i = 0;i < this.myalb.length;i++){
      this.idi[i] = document.getElementById(i.toString() + "canvas2");
    this.id[i] = document.getElementById(i.toString());
     this.idp[i] = document.getElementById(i.toString() + "p");
     this.idr[i] = document.getElementById(i + "r");
     var idpframe = document.getElementById("pframe" + i);
  
  
     idpframe.style.left = counterx + "%";
     idpframe.style.top = countery + "%";
  
     this.idi[i].style.left = counterx + 0.9 + "%";
     this.idi[i].style.top = countery + 1.1 + "%";
  
  
  
    this.idp[i].style.left = counterxp + "px";
    this.idp[i].style.top = counteryp + "px";
   
  
  
  
    counterx += 10;
    counterxp += 150;
  
  
    if(i == 3 || i == 7 || i == 11){
      counterx = 40;
      countery += 20;
  
      counterxp = 150;
      counteryp += 150;
  
    }
  
     }
  
  }
  
  }
  
  class MyAlbom{
    imageSrc:any;
  
  
  counter:number;
  
    constructor(){
      
    }
  
  
    
    readURL(event): void {
      if (event.target.files && event.target.files[0]) {
          const file = event.target.files[0];
          
          const reader = new FileReader();
          reader.readAsDataURL(file);
     
          reader.onload = (e) => {this.imageSrc = reader.result;}
      
    
      }
  }
  
  }
