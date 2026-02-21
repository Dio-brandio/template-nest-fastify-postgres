export interface PlanLimits {
  reportsPerMonth: number;
  userShares: number;
  advanceFilters: boolean;
  reportAccessCount: number | null;
  notificationForChanges: boolean;
  features: FeatureRule[];
}

export interface FeatureRule {
  feature: ReportFeature;
  scopes: GeoScope[];
}
export enum GeoScope {
  RESIDENCE = 'RESIDENCE',
  STATE = 'STATE',
  COUNTY = 'COUNTY',
  ZIP = 'ZIP',
  NEIGHBORHOOD = 'NEIGHBORHOOD',
}
export enum ReportFeature {
  // Residence
  CURRENT_VALUATION = 'CURRENT_VALUATION',
  FUTURE_VALUATION = 'FUTURE_VALUATION',
  FACTORS_IMPACTING_VALUATION = 'FACTORS_IMPACTING_VALUATION',
  VALUE_ADDS_ROI = 'VALUE_ADDS_ROI',

  // Market Metrics
  AVG_LISTING_PRICE = 'AVG_LISTING_PRICE',
  AVG_SALES_PRICE = 'AVG_SALES_PRICE',
  TOTAL_HOMES_FOR_SALE = 'TOTAL_HOMES_FOR_SALE',
  HOMES_SOLD_LAST_YEAR = 'HOMES_SOLD_LAST_YEAR',
  AVG_DAYS_ON_MARKET = 'AVG_DAYS_ON_MARKET',
  MONTHS_OF_INVENTORY = 'MONTHS_OF_INVENTORY',
  LIST_TO_SALES_RATIO = 'LIST_TO_SALES_RATIO',
  PERCENT_PRICE_CUTS = 'PERCENT_PRICE_CUTS',

  // YoY
  YOY_AVG_LISTING_PRICE = 'YOY_AVG_LISTING_PRICE',
  YOY_AVG_SALES_PRICE = 'YOY_AVG_SALES_PRICE',
  YOY_INVENTORY = 'YOY_INVENTORY',

  // Extras
  AVG_PRICE_PER_SQFT = 'AVG_PRICE_PER_SQFT',
}

export const BASIC_PLAN_LIMITS: PlanLimits = {
  reportsPerMonth: 1,
  userShares: 0,
  advanceFilters: true,
  reportAccessCount: 1,
  notificationForChanges: false,

  features: [
    { feature: ReportFeature.CURRENT_VALUATION, scopes: [GeoScope.RESIDENCE] },

    {
      feature: ReportFeature.AVG_SALES_PRICE,
      scopes: [GeoScope.STATE, GeoScope.COUNTY, GeoScope.ZIP],
    },
    {
      feature: ReportFeature.TOTAL_HOMES_FOR_SALE,
      scopes: [GeoScope.STATE, GeoScope.COUNTY, GeoScope.ZIP],
    },
    {
      feature: ReportFeature.AVG_DAYS_ON_MARKET,
      scopes: [GeoScope.STATE, GeoScope.COUNTY, GeoScope.ZIP],
    },
    {
      feature: ReportFeature.MONTHS_OF_INVENTORY,
      scopes: [GeoScope.STATE, GeoScope.COUNTY, GeoScope.ZIP],
    },
    {
      feature: ReportFeature.LIST_TO_SALES_RATIO,
      scopes: [GeoScope.STATE, GeoScope.COUNTY, GeoScope.ZIP],
    },
    {
      feature: ReportFeature.PERCENT_PRICE_CUTS,
      scopes: [GeoScope.STATE, GeoScope.COUNTY, GeoScope.ZIP],
    },
    {
      feature: ReportFeature.YOY_AVG_SALES_PRICE,
      scopes: [GeoScope.STATE, GeoScope.COUNTY, GeoScope.ZIP],
    },
    {
      feature: ReportFeature.YOY_INVENTORY,
      scopes: [GeoScope.STATE, GeoScope.COUNTY, GeoScope.ZIP],
    },
  ],
};

export const PREMIUM_PLAN: PlanLimits = {
  reportsPerMonth: 5,
  userShares: 3,
  advanceFilters: true,
  reportAccessCount: null,
  notificationForChanges: true,
  features: [
    // Residence
    { feature: ReportFeature.CURRENT_VALUATION, scopes: [GeoScope.RESIDENCE] },
    { feature: ReportFeature.FUTURE_VALUATION, scopes: [GeoScope.RESIDENCE] },
    {
      feature: ReportFeature.FACTORS_IMPACTING_VALUATION,
      scopes: [GeoScope.RESIDENCE],
    },
    { feature: ReportFeature.VALUE_ADDS_ROI, scopes: [GeoScope.RESIDENCE] },

    // Market
    {
      feature: ReportFeature.AVG_LISTING_PRICE,
      scopes: Object.values(GeoScope),
    },
    { feature: ReportFeature.AVG_SALES_PRICE, scopes: Object.values(GeoScope) },
    {
      feature: ReportFeature.TOTAL_HOMES_FOR_SALE,
      scopes: Object.values(GeoScope),
    },
    {
      feature: ReportFeature.HOMES_SOLD_LAST_YEAR,
      scopes: Object.values(GeoScope),
    },
    {
      feature: ReportFeature.MONTHS_OF_INVENTORY,
      scopes: Object.values(GeoScope),
    },
    {
      feature: ReportFeature.LIST_TO_SALES_RATIO,
      scopes: Object.values(GeoScope),
    },
    {
      feature: ReportFeature.PERCENT_PRICE_CUTS,
      scopes: Object.values(GeoScope),
    },

    // YoY
    {
      feature: ReportFeature.YOY_AVG_LISTING_PRICE,
      scopes: Object.values(GeoScope),
    },
    {
      feature: ReportFeature.YOY_AVG_SALES_PRICE,
      scopes: Object.values(GeoScope),
    },
    { feature: ReportFeature.YOY_INVENTORY, scopes: Object.values(GeoScope) },

    // Extras
    {
      feature: ReportFeature.AVG_PRICE_PER_SQFT,
      scopes: Object.values(GeoScope),
    },
  ],
};

export const PRO_PLAN: PlanLimits = {
  reportsPerMonth: 10,
  userShares: 30,
  advanceFilters: true,
  reportAccessCount: null,
  notificationForChanges: true,
  features: PREMIUM_PLAN.features,
};
