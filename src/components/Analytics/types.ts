export type MockAnalyticsDataType = {
  amount: number;
  month: string;
  enabled: boolean;
};
export const MockAnalyticsData: MockAnalyticsDataType[] = [
  { amount: 1234, month: "Jan", enabled: false },
  { amount: 2234, month: "Feb", enabled: false },
  { amount: 5234, month: "Mar", enabled: true },
  { amount: 2234, month: "Apr", enabled: false },
  { amount: 1000, month: "May", enabled: false },
  { amount: 2900, month: "Jun", enabled: false },
  { amount: 3900, month: "Jul", enabled: false },
];
