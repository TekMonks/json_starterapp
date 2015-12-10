/* 
 * (C) 2015 TekMonks. All rights reserved.
 * License: MIT - see enclosed LICENSE file.
 */

exports.doService = doService;

function doService(jsonReq, callback) {
	// add your REST code here
	//
	// jsonReq is the incoming request as a Javascript object 
	//
	// return the final result as a JSON object 
	// using callback(my_Result_JSON_Object) where
	// my_Result_JSON_Object is your result as a Javascript
	// object
	
	var jsobj = {}; jsobj.message = "Hello JSON World";
	
	callback(jsobj);
}