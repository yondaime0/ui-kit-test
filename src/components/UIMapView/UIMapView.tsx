import { useForegroundPermissions } from "expo-location";
import { forwardRef, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { useStyles } from "react-native-unistyles";

import { stylesheet } from "./UIMapView.styles";
import { UIStatusBar } from "../UIStatusBar";

import type { UIMapViewProps } from "./UIMapView.types";

const UIMapView = forwardRef<MapView, UIMapViewProps>(
  ({ children, region, bottomView, ...props }, ref) => {
    const { theme, styles } = useStyles(stylesheet);
    const [status, requestPermission] = useForegroundPermissions();

    useEffect(() => {
      if (status === null) {
        return;
      }
      if (!status.granted) {
        requestPermission();
      }
    }, [status]);

    return (
      <>
        <UIStatusBar
          backgroundColor={theme.colors.main}
          barStyle="dark-content"
        />
        <MapView
          ref={ref}
          loadingEnabled
          loadingIndicatorColor={theme.colors.main}
          followsUserLocation
          showsUserLocation
          userLocationPriority="balanced"
          provider={PROVIDER_GOOGLE}
          style={StyleSheet.absoluteFillObject}
          onPanDrag={() => {}}
          initialRegion={{ ...region, latitudeDelta: 0.1, longitudeDelta: 0.1 }}
          {...props}
        >
          {children}
        </MapView>
        {bottomView ? (
          <View style={styles.bottomView}>{bottomView?.children}</View>
        ) : null}
      </>
    );
  }
);

export default UIMapView;
