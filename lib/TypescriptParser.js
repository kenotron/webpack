/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
"use strict";

// Syntax: https://developer.mozilla.org/en/SpiderMonkey/Parser_API

const { Tapable } = require("tapable");
const typescript = require("typescript");

class TypescriptParser extends Tapable {
	constructor(options) {
		super();
		this.hooks = {};
		this.options = options;
	}

	parse(source, state, callback) {
		// flag it as ESM
		state.module.buildMeta.exportsType = "namespace";

		// extract exports
		if (typeof typescript !== "undefined") {
			// TODO
		} else {
			throw new Error(
				"Can't compile WebAssembly modules without WebAssembly support in current node.js version (Update to latest node.js version)"
			);
		}
	}
}

module.exports = TypescriptParser;
