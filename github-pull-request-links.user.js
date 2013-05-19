// ==UserScript==
// @name           Github: Pull Request Links
// @namespace      https://github.com/skratchdot/github-pull-request-links.user.js
// @description    A user script to "linkify" the to/from branches on Pull Request pages.
// @include        https://github.com/*
// @match          https://github.com/*
// @require        https://gist.github.com/skratchdot/5604120/raw/_init.js
// @require        https://gist.github.com/skratchdot/5604120/raw/pull-request-links.js
// @run-at         document-end
// @icon           http://skratchdot.com/favicon.ico
// @downloadURL    https://github.com/skratchdot/github-pull-request-links.user.js/raw/master/github-pull-request-links.user.js
// @updateURL      https://github.com/skratchdot/github-pull-request-links.user.js/raw/master/github-pull-request-links.user.js
// @version        1.4
// ==/UserScript==
/*global SKRATCHDOT, document */

// This code is only going to run for browsers that don't support
// the @require annotation when executing userscripts.
if ('undefined' === typeof SKRATCHDOT) {
	var addScript = function (src) {
		'use strict';
		var script = document.createElement('script');
		script.src = src;
		document.body.appendChild(script);
		document.body.removeChild(script);
	};

	// Required by: repo-filter-info
	addScript('https://gist.github.com/skratchdot/5604120/raw/pull-request-links.js');
}