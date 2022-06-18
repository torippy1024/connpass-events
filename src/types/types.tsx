export type ConnpassEventDataType = {
  event_id: number;
  title: string;
  catch: string;
  description: string;
  event_url: string;
  started_at: string;
  ended_at: string;
  limit: number;
  hash_tag: string;
  event_type: string;
  accepted: number;
  waiting: number;
  place: string;
  address: string;
}

export type TopPagePropsType = {
  connpassEvents: ConnpassEventDataType[]
}