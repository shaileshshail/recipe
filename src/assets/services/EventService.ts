import { Subject,Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({// makes EventService injectable in other classes
  providedIn:'root'//access of this EventService
})
export class EventService{
  private subject = new Subject();

  emit(eventName:string,payload:any){
    this.subject.next({eventName,payload});
  }

  //.subscribe litens for changes in observable function,
  //check if eventname emitted == eventname listening, then send the value to the callback function
  listen(eventName:string,callback:(event:any)=>void){
    this.subject.asObservable().subscribe((nextObj:any)=>{
      if(eventName == nextObj.eventName){
        callback(nextObj.payload);
      }
    })
  }
}

