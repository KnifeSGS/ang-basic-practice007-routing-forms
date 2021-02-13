import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../model/event';
import { EventService } from '../service/event.service';

@Component({
  selector: 'app-event-editor',
  templateUrl: './event-editor.component.html',
  styleUrls: ['./event-editor.component.scss']
})
export class EventEditorComponent implements OnInit {

  event: Event = new Event();

  constructor(
    private eService: EventService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        this.eService.get(params.id).subscribe(
          event => {
            this.event = event || new Event();
          }
        )
      }
    );
  }

  onFormSubmit(form: NgForm): void {
    form.value;
    this.eService.update(this.event).forEach(value => value);
    this.router.navigateByUrl(`/`);
  }

}
