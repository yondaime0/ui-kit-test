import { useEffect, useState } from "react";
import { getUniqueId } from "react-native-device-info";

export const useDeviceId = () => {
  const [deviceId, setDeviceId] = useState<string | null>(null);

  const getDeviceId = async () => {
    const deviceId = await getUniqueId();
    setDeviceId(deviceId);
  };

  useEffect(() => {
    getDeviceId();
  }, []);

  return deviceId;
};
