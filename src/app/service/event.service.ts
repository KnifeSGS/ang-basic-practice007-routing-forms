import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { Event } from '../model/event';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  // private list: Event[] = [
  //   {
  //     id: 1,
  //     name: 'Angular Connect',
  //     date: '9/26/2036',
  //     time: '10am',
  //     location: { address: '1 London Rd', city: 'London', country: 'England' }
  //   },
  //   {
  //     id: 2,
  //     name: 'ng-nl',
  //     date: '4/15/2037',
  //     time: '9am',
  //     location: { address: '127 DT ', city: 'Amsterdam', country: 'NL' }
  //   },
  //   {
  //     id: 3,
  //     name: 'ng-conf 2037',
  //     date: '4/15/2037',
  //     time: '9am',
  //     location: { address: 'The Palatial America Hotel', city: 'Salt Lake City', country: 'USA' }
  //   },
  //   {
  //     id: 4,
  //     name: 'UN Angular Summit',
  //     date: '6/10/2037',
  //     time: '8am',
  //     location: { address: 'The UN Angular Center', city: 'New York', country: 'USA' }
  //   },
  // ];

  dataUrl: string = "http://localhost:3000/list";

  // list$: BehaviorSubject<Event[]> = new BehaviorSubject<Event[]>(this.list);
  list$: BehaviorSubject<Event[]> = new BehaviorSubject<Event[]>([]);

  constructor(private http: HttpClient) { }

  // getAll(): void {
  //   this.list$.next(this.list);
  // }
  getAll(): void {
    this.http.get<Event[]>(this.dataUrl).subscribe(
      events => this.list$.next(events)
    );
  }

  get(id: number): Observable<Event> {
    id = parseInt(('' + id), 10);
    const ev: Event | undefined = this.list$.value.find(item => item.id === id);
    if (ev) {
      return of(ev);
    }
    return of(new Event());
  }

  // update(event: Event): void {
  //   const index: number = this.list.findIndex(item => item.id === event.id);
  //   this.list.splice(index, 1, event);
  //   this.getAll();
  // }
  update(event: Event): Observable<Event> {
    return this.http.patch<Event>(`${this.dataUrl}/${event.id}`, event);
  }

  remove(event: Event): void {
    this.http.delete(`${this.dataUrl}/${event.id}`).subscribe(
      () => this.getAll()
    );
  }

  create(event: Event): void {
    this.http.post<Event>(this.dataUrl, event).subscribe(
      () => this.getAll()
    );
  }

}
