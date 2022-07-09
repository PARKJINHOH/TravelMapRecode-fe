import React from 'react';
import { useMemo } from "react";
import {GoogleMap, LoadScript} from '@react-google-maps/api';
import RegisterBtn from "../register/RegisterBtn";
import LoginBtn from "../login/LoginBtn";

export default function GoogleMapApi() {
    return <Map />;
}

function Map() {
    const containerStyle = {
        width: '100%',
        height: '100vh'
    };

    const center = useMemo(() => ({
        lat: 37.580283, lng: 126.976641
    }), []);

    const mapOptions = {
        fullscreenControl: false,
    };

    return (
        //https://react-google-maps-api-docs.netlify.app/
        <LoadScript
            googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
            <GoogleMap
                zoom={10}
                mapContainerStyle={containerStyle}
                center={center}
                options={mapOptions}>
                { /* Child components, such as markers, info windows, etc. */ }
            </GoogleMap>
            <LoginBtn/>
            <RegisterBtn/>
        </LoadScript>
    );
}