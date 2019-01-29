'use strict';

import { interpolateRgb, quantize } from 'd3-interpolate';
console.log(quantize(interpolateRgb('red', 'blue'), 10));
