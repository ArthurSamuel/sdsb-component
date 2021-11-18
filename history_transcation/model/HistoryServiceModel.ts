interface IGiver {
  id: number;
  username: string;
  type: string;
  member_id: number;
  customer_id: number;
  name: string;
  email: string;
  image: string;
  description: string;
  status: string;
  pin: string;
  created_by: number;
  updated_by: number;
  deleted_by: number;
  deleted_at: string;
  created_at: string;
  updated_at: string;
}

interface IData {
  id: number;
  member_id: number;
  wallet_type: string;
  type: string;
  date: string;
  amount: string;
  description: string;
  reference_type: 'gift' | 'transfer';
  reference_id: number;
  giver_id: number;
  status: string;
  created_by: number;
  updated_by: number;
  deleted_by: number;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  giver: IGiver;
}

interface IDataParent {
  data: IData[];
  current_page: string;
  per_page: string;
  total: number;
}

export interface IHistoryService {
  data: IDataParent;
  statusCode: number;
  message: string;
  error_message: string;
}
