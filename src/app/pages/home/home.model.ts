type Id = string | undefined;
type Date = string | null | undefined;
type Name = string | null | undefined;
type Time = string | null | undefined;

interface EventsSchedule {
  id?: Id;
  date: Date;
  time: Time;
  name: Name;
}

export { EventsSchedule };
