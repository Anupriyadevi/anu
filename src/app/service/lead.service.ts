import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeadService {

  public API_URL = environment.API_URL;
  constructor(private http: HttpClient) { }

  private extractData1(res: any) {
    let body = res;
    return body || {};
  }

  getLead(): Observable<any> {
    return this.http.get<any>(this.API_URL + '/api/createLead/').pipe(
      map(this.extractData1));
  }

  getHotleads(): Observable<any> {
    return this.http.get<any>(this.API_URL + '/api/createLead/hot').pipe(
      map(this.extractData1));
  }
  getColdleads(): Observable<any> {
    return this.http.get<any>(this.API_URL + '/api/createLead/cold').pipe(
      map(this.extractData1));
  }
  getWarmleads(): Observable<any> {
    return this.http.get<any>(this.API_URL + '/api/createLead/warm').pipe(
      map(this.extractData1));
  }
  getLostleads(): Observable<any> {
    return this.http.get<any>(this.API_URL + '/api/createLead/lost').pipe(
      map(this.extractData1));
  }

  getFeedbacks(): Observable<any> {
    return this.http.get<any>(this.API_URL + '/api/createLead/feedbacks').pipe(
      map(this.extractData1));
  }
  getFeedbackWithid(id): Observable<any> {
    return this.http.get<any>(this.API_URL + '/api/createLead/feedbacks/' + id).pipe(
      map(this.extractData1));
  }
  getSingleLead(id): Observable<any> {
    return this.http.get<any>(this.API_URL + '/api/createLead/lead/' + id).pipe(
      map(this.extractData1));
  }
  getSingleConvertedLead(id): Observable<any> {
    return this.http.get<any>(this.API_URL + '/api/createLead/ConvertedLead/' + id).pipe(
      map(this.extractData1));
  }
  getSingleConvertedLeadCB(id): Observable<any> {
    return this.http.get<any>(this.API_URL + '/api/createLead/ConvertedLeadCB/' + id).pipe(
      map(this.extractData1));
  }
  getCustomer(): Observable<any> {
    return this.http.get<any>(this.API_URL + '/api/createLead/customer').pipe(
      map(this.extractData1));
  }
  getCalBack(): Observable<any> {
    return this.http.get<any>(this.API_URL + '/api/createLead/callBack').pipe(
      map(this.extractData1));
  }
  getCalBackcompleted(): Observable<any> {
    return this.http.get<any>(this.API_URL + '/api/createLead/callBackCompleted').pipe(
      map(this.extractData1));
  }
  getCalBackrejected(): Observable<any> {
    return this.http.get<any>(this.API_URL + '/api/createLead/callBackrejected').pipe(
      map(this.extractData1));
  }

  getCustomerDetails(id): Observable<any> {
    return this.http.get<any>(this.API_URL + '/api/createLead/customerDetails/' + id).pipe(
      map(this.extractData1));
  }

  addLead(data): Observable<any> {
    return this.http.post<any>(this.API_URL + '/api/createLead/', data).pipe(
      map(this.extractData1));
  }

  addFeedback(data): Observable<any> {
    return this.http.post<any>(this.API_URL + '/api/createLead/feedback', data).pipe(
      map(this.extractData1));
  }

  updateLead(id, data): Observable<any> {
    return this.http.put<any>(this.API_URL + '/api/createLead/updateNewLead/' + id, data).pipe(
      map(this.extractData1));
  }
  updateConvertedLead(id, data): Observable<any> {
    return this.http.put<any>(this.API_URL + '/api/createLead/updateConvertedLead/' + id, data).pipe(
      map(this.extractData1));
  }
  updateTicket(id, data): Observable<any> {
    return this.http.put<any>(this.API_URL + '/api/createLead/updateTicket/' + id, data).pipe(
      map(this.extractData1));
  }

  convertLead(data): Observable<any> {
    return this.http.post<any>(this.API_URL + '/api/createLead/convertLead', data).pipe(
      map(this.extractData1));
  }
  customerProfile(data): Observable<any> {
    return this.http.post<any>(this.API_URL + '/api/createLead/customerProfile', data).pipe(
      map(this.extractData1));
  }
 
}
