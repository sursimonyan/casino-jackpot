export interface IRouletteItem {
  index: number;
}

export interface IPrizesItem {
  id: string;
  title?: string;
  cash?: number;
  image?: string;
  prizePlay?: boolean;
  isPrizeCash?: boolean;
}

export interface IWinnersItem {
  id: number;
  number: string;
  type: string;
  winnerID: string;
  winnerPrize: string;
  color?: string;
  winOpen?: boolean;
  waitingWin?: boolean;
}
