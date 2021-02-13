import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Event } from 'src/app/model/event';
import { EventService } from 'src/app/service/event.service';


@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {

  eventList$: BehaviorSubject<Event[]> = this.eService.list$;
  // testEvent: Observable<Event> = this.eventService.get(1);


  constructor(
    private eService: EventService,
    private router: Router
  ) {
  }

  onDelete(event: Event): void {
    this.eService.remove(event);
  }

  createEvent(): void {
    let rndId = Math.floor(Math.random() * 1000000000);
    if (this.eventList$.value.find(event => event.id === rndId)) {
      console.error('Már létező id, újragenerálás folyamatban...');
      this.createEvent();
    } else {
      this.eService.create({ id: rndId, name: 'Kérem töltse fel adattal', date: '', time: '', location: { address: '', city: '', country: '' } });
    }
  }

  ngOnInit(): void {
    this.eService.getAll();
  }



}
