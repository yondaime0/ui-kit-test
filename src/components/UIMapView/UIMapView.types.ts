import type { LatLng, MapViewProps } from "react-native-maps";

export type UIMapViewProps = {
  children: React.ReactNode;
  region: LatLng;
  bottomView?: {
    children: React.ReactNode;
  };
} & Omit<MapViewProps, "children">;
