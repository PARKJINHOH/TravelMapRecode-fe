import React from 'react';
import { useMemo } from "react";
import {GoogleMap, Marker, useLoadScript} from '@react-google-maps/api';

export default function GoogleMapApi() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    });

    if (!isLoaded){
        return <div>Loading...</div>;
    }
    return <Map />;
}

function Map() {
    const center = useMemo(() => ({
        lat: 37.580283, lng: 126.976641
    }), []);

    return (
        <GoogleMap zoom={7} center={center} mapContainerClassName="map-container">
            <Marker position={center} />
        </GoogleMap>
    );
}