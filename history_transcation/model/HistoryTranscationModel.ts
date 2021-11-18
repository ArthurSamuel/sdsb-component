export interface ITranscation {
  avatar: JSX.Element;
  title: string;
  description: string;
  amount: string;
  textclass: 'text-fill' | 'text-light-danger';
  amountcolor: 'text-success' | 'text-danger';
  date: string;
}
export interface ITransactionGroup {
  data: ITranscation[];
  date: string;
}
