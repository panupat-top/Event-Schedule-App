type Date = string | null | undefined;
type Name = string | null | undefined;
type Time = string | null | undefined;

interface EventsSchedule {
  date: Date;
  time: Time;
  name: Name;
}

export { EventsSchedule };
