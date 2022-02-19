import * as util from './util.js';
import {EvalAndTime} from './EvalAndTime.js';
import {HeatMap} from './HeatMap.js';
import {Openings} from './Openings.js';
import {MovePaths} from './MovePaths.js';

export var ChessDataViz = {
	EvalAndTime,
	HeatMap,
	Openings,
	MovePaths,
	util
};



window.ChessDataViz = ChessDataViz;