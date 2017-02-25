import _ from 'lodash';
import React from 'react';
import L from 'leaflet';
import {
  Map,
  Marker,
  Popup,
  TileLayer,
  FeatureGroup,
  Circle,
  Polyline,
  Polygon,
} from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw'

// temp - leaflet CSS - I will only include this in storybook
//    no need to bundle this w/ npm
import 'leaflet/dist/leaflet.css';
// and a CSS file for the draw portion
import './leaflet.draw.css';
// temp - my custom CSS = crappy hacks, I'd like to remove
import './temp-leaflet-container.css';

// return a subset of the input props, to the top level Map component
const pickMapProps = mapData => _.pick(mapData, [
  'center',
  'zoom',
  'style',
]);

const ReactLeafletPolytools = ({
  style,
  onClick,
  defaultMapData,
  ...props
}) => {
  const mapData = _.extend(defaultMapData, props);
  return (
    <Map {...pickMapProps(mapData)}>
      <TileLayer
        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <FeatureGroup>
        <EditControl
          position='topright'
          onEdited={props.onChanged}
          onCreated={props.onChanged}
          onDeleted={props.onChanged}
          draw={{
            rectangle: false
          }}
        />
        <Circle center={[51.51, -0.06]} radius={200} />
        {/*
        {props.markerDatas && props.markerDatas.map((mrk, i) => (
          <Marker position={mkr.position} key={i}>
            <Popup>{mkr.popup}</Popup>
          </Marker>
        ))}
        {props.circles && props.circles.map((node, i) => (
          <Circle center={node.center} radius={node.radius} key={i} />
        ))}
        */}
      </FeatureGroup>
    </Map>
  );
};
ReactLeafletPolytools.propTypes = {
  children: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
  style: React.PropTypes.object,
  defaultMapData: React.PropTypes.object,
  canAddPolygon: React.PropTypes.func,
  canEditPolygon: React.PropTypes.func,
  canDeletePolygon: React.PropTypes.func,
  onChange: React.PropTypes.func,
};
ReactLeafletPolytools.defaultProps = {
  // here are some defaults you can specify
  // all of these can be passed in directly into the component
  defaultMapData: {
    center: [51.505, -0.09],
    zoom: 13,
  },
  style: {
    minHeight: 300,
  },
  canAddPolygon: (mapData) => true,
  canEditPolygon: (mapData) => true,
  canDeletePolygon: (mapData) => true,
  onChange: (mapData) => console.log('map data changed', mapData),
};

export default ReactLeafletPolytools;
