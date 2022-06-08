export type ConnpassEventDataType = {
  title: string;
  description: string;
  event_url: string;
  started_at: string;
  ended_at: string;
}

export type TopPagePropsType = {
  connpassEvents: ConnpassEventDataType[]
}