import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class apicallService {
  constructor(private httpclient: HttpClient) {}

  getData(): Observable<any> {
    return this.httpclient.get<any>("http://localhost:3000/api/v1/data");
  }

  postData(data: any): Observable<any> {
    return this.httpclient.post<any>("http://localhost:3000/api/v1/data", data);
  }

  postFile(data: any): Observable<any> {
    return this.httpclient.post<any>("http://localhost:3000/api/v1/file", data);
  }
}
