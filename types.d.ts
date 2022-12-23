declare namespace Express {
  export interface Request {
    user: any;
    headers: {
      ['access-token']: string;
    }
  }
  export interface Response {
    user: any;
  }
  export interface Error {
    status: number;
    message: string;
  }
}
