import { PlanningPokerCard } from '../src/API';

export namespace Model {
  export interface WorkItem {
    id: string;
    name?: string;
    estimates?: {
      items?: Array<Estimate | null>;
    };
  }

  export interface Estimate {
    id: string;
    estimate: PlanningPokerCard;
  }
}
