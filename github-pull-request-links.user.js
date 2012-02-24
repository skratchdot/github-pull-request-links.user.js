// ==UserScript==
// @name           Github Pull Request Links
// @namespace      https://github.com/skratchdot/github-pull-request-links.user.js
// @description    A user script to "linkify" the to/from branches on Pull Request pages.
// @include        https://github.com/*
// ==/UserScript==

/*
 * This function attempts to create links on the branch names
 * in pull requests.  It will only work if both branches use the
 * same repository name.  The repository name is grabbed from "source"
 * (i.e. the .js-current-repository selector).  We generate a link in the
 * format:
 * 
 *	/USERNAME/REPO/tree/BRANCH_NAME
 *
 *		USERNAME : grabbed from the .commit-ref selector. The 1st part of the string (split by colon).
 *		REPO : grabbed from the .js-current-repository selector
 *		BRANCH_NAME : grabbed from the .commit-ref selector. The 2nd part of the string (split by colon).
 * 
 */
var main = function () {
	'use strict';
	jQuery('.commit-ref').css('cursor', 'pointer').click(function () {
		var repo = jQuery('.js-current-repository').text(),
			commitInfo = jQuery(this).text().split(':');
		if (repo.length > 0 && commitInfo.length === 2) {
			document.location = '/' + commitInfo[0] + '/' + repo + '/tree/' + commitInfo[1];
		}
	});
};

// Inject our main script
var script = document.createElement('script');
script.textContent = '(' + main.toString() + ')();';
document.body.appendChild(script);