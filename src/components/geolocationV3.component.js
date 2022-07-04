import React from "react";
import { useGeolocated } from "react-geolocated";
import Weather from './weather.component';

const Geolocated = () => {
    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,
        });

    return !isGeolocationAvailable ? (
        <div>Your browser does not support Geolocation</div>
    ) : !isGeolocationEnabled ? (
        <div>Geolocation is not enabled</div>
    ) : coords ? (
        <div>
            <Weather data={coords} />
        </div>
    ) : (
        <div>Getting the location data&hellip; </div>
    );
};

export default Geolocated;