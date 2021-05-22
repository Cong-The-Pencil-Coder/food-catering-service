import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class UiService {
  private searchWord: string = "";
  private type: number = 0;
  private subject = new Subject<any>();
  constructor() { }

  search(newStyle: string, newType: number = 0): void {
    this.searchWord = newStyle;
    this.type = newType;
    this.subject.next(this.type);
    this.subject.next(this.searchWord);
  }

  getStyle(): Observable<string> {
    return this.subject.asObservable();
  }
}
