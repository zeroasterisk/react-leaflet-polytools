# React Leaflet Polytools Component

**DRAFT ONLY --- PRE PRE ALPHA**

A component (or suite of High Order Components ??)
to facilitate easy and fast tools for drawing and editing polygons on maps.

## Features

- configurable tile server (or agnostic if HOC)
- fast and easy polygon draw and edit - single
- fast and easy polygon draw and edit - multiple
- events: onDraw, onEdit, onDelete (polygons)
- helpers: canCreatePolygon

## Plan Data Flow

Page -> HOC to maintain state (redux) -> ReactLeafletPolytools -> Leaflet/Draw

Polygon data goes back up to HOC/state (outside of ReactLeafletPolytools)

Then comes back down via props, triggering a re-draw of polygons

## About

This is a **controlled** component, no internal state

It can optionally can be extended / composed with HOC to extend controls.

It does support basic configuration out-of-the-box,
but most of the "work" is to be handled by helper functions, pass in props.
_(again, the HOC can make this painless)_

# Intall

    npm i --save react-leaflet-polytools

or

    yarn i react-leaflet-polytools

# Usage

    import ReactLeafletPolytools from 'react-leaflet-polytools';

    export default MyPage = ({ mapData, ...props }) => (
      <div>
        <h1>Here is an editable Polygon Map</h1>
        <ReactLeafletPolytools
          {...mapData}
          canAddPolygon={mapData => true}
          canEditPolygon={mapData => true}
          canDeletePolygon={mapData => true}
          onChange={mapData => console.log('map data changed', mapData)}
        />
      </div>
    );


## Props

- `canAddPolygon` function
 - default `(mapData) => true;`
- `canEditPolygon` function
 - default `(mapData) => true;`
- `canDeletePolygon` function
 - default `(mapData) => true;`
- `onChange` function
 - default `(mapData) => console.log('map data changed', mapData)}

