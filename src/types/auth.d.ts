interface DataToken {
  accessToken: string;
}

interface AuthDataProps {
  data: DataToken;
}

interface ResponseProps {
  message: string;
  statusCode: number;
  data: DataToken;
}
