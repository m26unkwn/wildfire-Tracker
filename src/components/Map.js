import GoogleMapReact from "google-map-react";

export const Map = ({center , zoom}) => {
    return (
        <div className='Map'>
            <GoogleMapReact
                bootstrapURLKeys={{key:'AIzaSyCJwLEgG0IcSo-Iu2PfXgTdKUUK3WTFJJY'}}
                defaultCenter={center}
                defaultZoom= {zoom}
            >

            </GoogleMapReact>
        </div>
    )
}

Map.defaultProps={
    center:{
        lat:28.7041,
        lng:77.1025
    },
    zoom: 6,
}
