export class Product {
  productId: string;
  price: number;
  name: string;
}

export interface IMember {
  memberId: string;
  fullName: string;
  zipCode: string;
  errorMessage: string;
  isSuccess: boolean;
}

export class Member implements IMember {
  public memberId: string;
  public fullName: string;
  public zipCode: string;
  errorMessage: string;
  isSuccess: boolean;
  constructor() {
    this.memberId = "100";
    this.fullName = "jen Smart";
    this.zipCode = "84223";
    this.errorMessage = "OK";
    this.isSuccess = true;
  }
}

export interface ISingleResponse<TModel> {
  model: TModel;
  message: string;
  didError: boolean;
  errorMessage: string;
}

export class SingleResponse<TModel> implements ISingleResponse<TModel> {
  public model: TModel;
  public message: string;
  public didError: boolean;
  public errorMessage: string;
}

export class Payment {
  memberId: string;
  paymentAmount: number;
  paymentDate: Date;
  nameOnCard: string;
  creditCardNumber: string;
  cvv: string;
  paymentSource: string;
  expirationDate: string;
  isSuccess: boolean;
  errorMessage: string;
  paymentMessage: string;
  paymentConfirmationId: string;
  member: Member;
}
