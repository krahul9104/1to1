import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {

  public goals = [];
  constructor() {

  }
  getAllGoalsforUser() {
    return [
      {
        "_id": 1,
        "name": "test",
        "description": "test",
        "type": 'org',
        "active": true,
        "quater": "Q1",
        "year": 2019,
        "points": 5,
        "employeeId": "11",
        "orgId": 1
      },
      {
        "_id": 12,
        "name": "test",
        "description": "test1",
        "type": 'org1',
        "active": true,
        "quater": "Q1",
        "year": 2019,
        "points": 5,
        "employeeId": "11",
        "orgId": 1
      }
    ]
  }
}
