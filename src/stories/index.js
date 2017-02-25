import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
// FOR HOC IDEA
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import ReactLeafletPolytools from '../index';

storiesOf('ReactLeafletPolytools', module)
  .add('default view', () => (
    <ReactLeafletPolytools
      onChange={ action('ReactLeafletPolytools changed') }
      onClick={ action('ReactLeafletPolytools clicked') }
    >
      Hello
    </ReactLeafletPolytools>
  ))
  .add('render the map by itself', () => {
    const position = [51.505, -0.09];
    return (
      <Map center={position} zoom={13}>
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
          </Popup>
        </Marker>
      </Map>
    );
  })
  .add('custom styles', () => {
    const style = {
      fontSize: 20,
      textTransform: 'uppercase',
      color: '#FF8833',
    };
    return (
      <ReactLeafletPolytools style={ style }>Hello</ReactLeafletPolytools>
    );
  });
