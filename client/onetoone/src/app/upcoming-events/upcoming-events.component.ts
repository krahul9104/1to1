import { Component, OnInit } from '@angular/core';
import { GoalsService } from '../_services/goals.service';



@Component({
  selector: 'app-upcoming-events',
  templateUrl: './upcoming-events.component.html',
  styleUrls: ['./upcoming-events.component.scss'],
})
export class UpcomingEventsComponent implements OnInit {

  public userGoals = [];
  constructor(private _goalsServices: GoalsService) { }

  ngOnInit() {

    this.userGoals = this._goalsServices.getAllGoalsforUser();
  }

}
