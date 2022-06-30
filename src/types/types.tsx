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

export type DaysType = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type TopPagePropsType = {
  connpassEvents: ConnpassEventDataType[];
  dayDisplay: DaysType;
  setDayDisplay: React.Dispatch<React.SetStateAction<DaysType>>;
  eventsDates: EventsDatesType;
}

export type EventsDatesType = {
  updateTime: string;
  days: {
    0: string;
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
  }
}