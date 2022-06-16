import { LatLng } from "../types/location";

export function get_distance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) {
  if (lat1 === lat2 && lon1 === lon2) {
    return 0;
  } else {
    var radlat1 = (Math.PI * lat1) / 180;
    var radlat2 = (Math.PI * lat2) / 180;
    var theta = lon1 - lon2;
    var radtheta = (Math.PI * theta) / 180;
    var dist =
      Math.sin(radlat1) * Math.sin(radlat2) +
      Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;
    return Math.round(dist * 1.609344 * 100) / 100;
  }
}

// Redbird's Accra Office Coordinates
export const defaultLat: number = 5.6404595;
export const defaultLng: number = -0.1776006;
export const defaultCoords: LatLng = {
  lat: defaultLat,
  lng: defaultLng
}
export const GHANA_BOUNDS = {
  north: 11.217208,
  south: 4.730142,
  west: -3.283365,
  east: 1.206191
}

export const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    const locationOptions = {
      maximumAge: 0,
      enableHighAccuracy: true
    }
    navigator.geolocation.getCurrentPosition(
      resolve,
      reject,
      locationOptions
    )
  })
}
