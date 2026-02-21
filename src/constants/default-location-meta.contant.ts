export interface DefaultLocationMeta {
  type: 'ipAddress' | 'latitudeLongitude';
  ipAddress?: string;
  location?: string;
  latitude?: number;
  longitude?: number;
}
