import { EventsSchedule } from './../../pages/home/home.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  base = 'https://event-schedule.herokuapp.com/v1';

  constructor(private http: HttpClient) { }

  addEvent(body: EventsSchedule): Promise<any> {
    const url = `${this.base}/event/add`;
    return this.http.post(url, body).toPromise();
  }

  listsEvent(): Promise<any> {
    const url = `${this.base}/event/lists`;
    return this.http.get(url).toPromise();
  }

  removeEvent(id: string): Promise<any> {
    const url = `${this.base}/event/remove/${id}`;
    return this.http.delete(url).toPromise();
  }
}
