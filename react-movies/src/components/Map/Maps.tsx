import { MapContainer, Marker, Popup, TileLayer, useMapEvent } from "react-leaflet";
import type Coordinate from "./coordinate.model";
import { useState } from "react";

export default function Map(props: MapsProps) {

    const [coordinates, setCoordinates] = useState(props.coordinates);

    return (
        <MapContainer center={ [26.40075399911557, -80.07494436576964] }
        zoom={15} scrollWheelZoom={ true } style={ { height: '600px', width: '1300px'} }
        >
            <TileLayer attribution="React Movies"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            { props.allowClicks ? <HandleMapClick setCoordinate={ coordinate => {
                setCoordinates([coordinate]);
                if (props.setCoordinate) {
                    props.setCoordinate(coordinate);
                }
            } } /> : undefined }

            { coordinates?.map(coordinate => <Marker key={ coordinate.lat + coordinate.lng }
                position={[coordinate.lat, coordinate.lng]}
            >
                { coordinate.message ? <Popup>{ coordinate.message }</Popup> : undefined}
            </Marker>) }

        </MapContainer>
    )
}

interface MapsProps {
    coordinates?: Coordinate[];
    setCoordinate?: (coordinate: Coordinate) => void;
    allowClicks: boolean;
}

function HandleMapClick(props: { setCoordinate(coordinate: Coordinate): void }) {
    useMapEvent('click', e => {
        props.setCoordinate({lat: e.latlng.lat, lng: e.latlng.lng})
    })

    return null;
}