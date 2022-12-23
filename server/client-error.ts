class ClientError {
  constructor(status: number, message: string) {
    this.status = status;
    this.message = message;
  }
  status: number;
  message: string;
}

module.exports = ClientError;
export {};
