export interface ITranscation {
  avatar: JSX.Element;
  title: string;
  description: string;
  amount: string;
  textclass: string;
  amountcolor: string;
}

export interface ITransactionGroup {
  data: ITranscation[];
  date: string;
}

export interface IHistoryTransaction {
  dataTranscation: ITransactionGroup[];
}