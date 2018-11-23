import { Injectable } from "@angular/core";
import { Member, Product, Payment } from "./app.classLibrary";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class PaymentService {
  private membersUrl = "api/members"; // URL to web api
  private productsUrl = "api/products"; // URL to web api

  constructor(private http: HttpClient) {}

  getProductList(filter: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl).pipe(
      tap(data => console.log("fetched data")),
      catchError(this.handleError("getProductList", []))
    );
  }

  /** GET member by id. Will 404 if id not found */
  getMember(id: number): Observable<Member> {
    const url = `${this.membersUrl}/${id}`;
    return this.http.get<Member>(url).pipe(
      tap(_ => console.log(`fetched member id=${id}`)),
      catchError(this.handleError<Member>(`getMember id=${id}`))
    );
  }


makePayment(payment: any): Observable<Payment> {
    console.log("in makePayment, payment:" + payment);
    if (!payment.expirationDate) {
      payment.isSuccess = false;
      payment.errorMessage = "expiration date is not valid!";
      return of(payment);
    }
    payment.errorMessage = "200 OK";
    payment.paymentMessage =
      "Your payment of $" + payment.paymentAmount + " has been processed!";
    return of(payment);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
