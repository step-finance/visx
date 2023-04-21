import annotationPackageJson from './visx-annotation/package.json';
import areaPackageJson from './visx-area/package.json';
import axisPackageJson from './visx-axis/package.json';
import bargroupPackageJson from './visx-bargroup/package.json';
import bargroupHorizontalPackageJson from './visx-bargroup-horizontal/package.json';
import barsPackageJson from './visx-bars/package.json';
import barstackPackageJson from './visx-barstack/package.json';
import barstackHorizontalPackageJson from './visx-barstack-horizontal/package.json';
import brushPackageJson from './visx-brush/package.json';
import chordPackageJson from './visx-chord/package.json';
import curvePackageJson from './visx-curve/package.json';
import dendrogramPackageJson from './visx-dendrogram/package.json';
import dotsPackageJson from './visx-dots/package.json';
import dragIPackageJson from './visx-drag-i/package.json';
import dragIIPackageJson from './visx-drag-ii/package.json';
import geoCustomPackageJson from './visx-geo-custom/package.json';
import geoMercatorPackageJson from './visx-geo-mercator/package.json';
import glyphPackageJson from './visx-glyph/package.json';
import gradientPackageJson from './visx-gradient/package.json';
import heatmapPackageJson from './visx-heatmap/package.json';
import legendPackageJson from './visx-legend/package.json';
import linktypesPackageJson from './visx-linktypes/package.json';
import networkPackageJson from './visx-network/package.json';
import packPackageJson from './visx-pack/package.json';
import patternPackageJson from './visx-pattern/package.json';
import polygonsPackageJson from './visx-polygons/package.json';
import radarPackageJson from './visx-radar/package.json';
import responsivePackageJson from './visx-responsive/package.json';
import lineRadialPackageJson from './visx-shape-line-radial/package.json';
import piePackageJson from './visx-shape-pie/package.json';
import splitLinePathPackageJson from './visx-shape-splitlinepath/package.json';
import stackedAreasPackageJson from './visx-stacked-areas/package.json';
import statsPackageJson from './visx-stats/package.json';
import streamgraphPackageJson from './visx-streamgraph/package.json';
import thresholdPackageJson from './visx-threshold/package.json';
import treePackageJson from './visx-tree/package.json';
import treemapPackageJson from './visx-treemap/package.json';
import voronoiPackageJson from './visx-voronoi/package.json';
import wordcloudPackageJson from './visx-wordcloud/package.json';
import zoomPackageJson from './visx-zoom-i/package.json';
import { packageJson as textPackageJson } from '../components/Gallery/TextTile';
import extractVisxDepsFromPackageJson from '../components/util/extractVisxDepsFromPackageJson';
var examples = [
    annotationPackageJson,
    areaPackageJson,
    axisPackageJson,
    bargroupHorizontalPackageJson,
    bargroupPackageJson,
    barsPackageJson,
    barstackHorizontalPackageJson,
    barstackPackageJson,
    brushPackageJson,
    chordPackageJson,
    curvePackageJson,
    dendrogramPackageJson,
    dotsPackageJson,
    dragIIPackageJson,
    dragIPackageJson,
    geoCustomPackageJson,
    geoMercatorPackageJson,
    glyphPackageJson,
    gradientPackageJson,
    heatmapPackageJson,
    legendPackageJson,
    lineRadialPackageJson,
    linktypesPackageJson,
    networkPackageJson,
    packPackageJson,
    patternPackageJson,
    piePackageJson,
    polygonsPackageJson,
    radarPackageJson,
    responsivePackageJson,
    splitLinePathPackageJson,
    stackedAreasPackageJson,
    statsPackageJson,
    streamgraphPackageJson,
    textPackageJson,
    thresholdPackageJson,
    treePackageJson,
    treemapPackageJson,
    voronoiPackageJson,
    wordcloudPackageJson,
    zoomPackageJson,
];
var exampleToVisxDependencyLookup = {};
var seenPackages = new Set();
examples.forEach(function (packageJson) {
    // create a visx package set per example
    var visxPackages = new Set(extractVisxDepsFromPackageJson(packageJson).map(function (visxPackage) { var _a; return (_a = visxPackage.split('@visx/')[1]) !== null && _a !== void 0 ? _a : ''; }));
    visxPackages.forEach(function (visxPackage) { return seenPackages.add(visxPackage); });
    exampleToVisxDependencyLookup[packageJson.name] = visxPackages;
});
export var visxPackages = Array.from(seenPackages).sort();
export default exampleToVisxDependencyLookup;
