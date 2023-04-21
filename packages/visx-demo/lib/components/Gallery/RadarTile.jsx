import React from 'react';
import Radar, { background, pumpkin } from '../../sandboxes/visx-radar/Example';
import GalleryTile from '../GalleryTile';
export { default as packageJson } from '../../sandboxes/visx-radar/package.json';
var tileStyles = { background: background };
var detailsStyles = { color: pumpkin };
export default function RadarTile() {
    return (<GalleryTile title="Radar" description="<Shape.Line /> + <Shape.LineRadial />" exampleRenderer={Radar} exampleUrl="/radar" tileStyles={tileStyles} detailsStyles={detailsStyles}/>);
}
