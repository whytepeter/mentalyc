export type ResponseType = {
  success: boolean;
  message: string;
  data?: any;
};

export type Recording = {
  id: string;
  name: string;
  timestamp: string;
  length: string;
  status: string;
  audioUrl: string;
};

export type Recordings = Recording[];
