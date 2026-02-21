export enum CronStatus {
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
}

export const CRON_JOB_NAMES = {
  systemUptime: 'systemUptime',
  userRecommendationGeneration: 'userRecommendationGeneration',
  llmCostAPICalculation: 'llmCostAPICalculation',
  morningRecoveryScoreNotification: 'morningRecoveryScoreNotification',
  eveningStressScoreNotification: 'eveningStressScoreNotification',
  dailyIntervention: 'dailyIntervention',
};
