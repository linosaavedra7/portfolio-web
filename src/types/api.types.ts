export interface ApiResponse<T> {
  data: T;
  message?: string;
  statusCode: number;
}

export interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}
