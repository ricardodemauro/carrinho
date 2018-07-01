import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux'
import { locationSearch } from '../../actions/roadActions'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  Polygon,
  Polyline
} from "react-google-maps";

const mapsStyles = [
  {
    featureType: "water",
    stylers: [
      { saturation: 43 },
      { lightness: -11 },
      { hue: "#0088ff" }
    ]
  },
  {
    featureType: "road",
    elementType: "geometry.fill",
    stylers: [
      { hue: "#ff0000" },
      { saturation: -100 },
      { lightness: 99 }
    ]
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#808080" }, { lightness: 54 }]
  },
  {
    featureType: "landscape.man_made",
    elementType: "geometry.fill",
    stylers: [{ color: "#ece2d9" }]
  },
  {
    featureType: "poi.park",
    elementType: "geometry.fill",
    stylers: [{ color: "#ccdca1" }]
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#767676" }]
  },
  {
    featureType: "road",
    elementType: "labels.text.stroke",
    stylers: [{ color: "#ffffff" }]
  },
  { featureType: "poi", stylers: [{ visibility: "off" }] },
  {
    featureType: "landscape.natural",
    elementType: "geometry.fill",
    stylers: [{ visibility: "on" }, { color: "#b8cb93" }]
  },
  { featureType: "poi.park", stylers: [{ visibility: "on" }] },
  {
    featureType: "poi.sports_complex",
    stylers: [{ visibility: "on" }]
  },
  { featureType: "poi.medical", stylers: [{ visibility: "on" }] },
  {
    featureType: "poi.business",
    stylers: [{ visibility: "simplified" }]
  }
]

const CustomSkinMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={18}
      defaultCenter={props.center}
      defaultOptions={{
        scrollwheel: true,
        zoomControl: true,
        styles: mapsStyles
      }}
    >
    {props.lines.map((elem, index) => {
      return (<Marker key={index} position={{ lat: elem.lat, lng: elem.lng }} />)
    })}
    <Polyline path={props.lines} geodesic={true} strokeColor='#FF0000' strokeOpacity={1.0} strokeWeight={2} />
    </GoogleMap>
  ))
);

class Road extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired
    }

    componentWillMount() {
        const { dispatch } = this.props
        dispatch(locationSearch())
    }

    render() {
      const { coords } = this.props
      const center = coords.length > 0 ? coords[0] : { lat: -23.6917598, lng: -46.5616912 }
      return (
          <CustomSkinMap
            googleMapURL="https://maps.googleapis.com/maps/api/js"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100vh` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            center={center}
            lines={coords}
          />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const { roadReducer } = state

    return {
        coords: roadReducer.coords
    }
}
export default connect(mapStateToProps)(Road);
