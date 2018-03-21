// Author: Sahil Dhar
// Description: Bypass All checks from com.devadvance.rootinspector-v1.0.apk

Java.perform(function(){

	var string_returntype = Java.use("java.lang.String");
	var bool_returntype = Java.use("java.lang.Boolean");
	
	var r = Java.use("com.devadvance.rootinspector.Root");
	r.checkfopen.implementation = function(ret){
		console.log("Inside checkfopen() ");
		return false;
	}
	
	var r = Java.use("com.devadvance.rootinspector.Root");
	r.checkifstream.implementation = function(ret){
		console.log("Inside checkifstream() ");
		return false;
	}
	var r = Java.use("com.devadvance.rootinspector.Root");
	r.runls.implementation = function(x,y,z){
		console.log("Inside runls() ");
		return false;
	}
	var r = Java.use("com.devadvance.rootinspector.Root");
	r.runpmlist.implementation = function(x,y){
		console.log("Inside runpmlist() ");
		return false;
	}
	var r = Java.use("com.devadvance.rootinspector.Root");
	r.runsu.implementation = function(x){
		console.log("Inside runsu() ");
		return false;
	}
	var r = Java.use("com.devadvance.rootinspector.Root");
	r.statfile.implementation = function(ret){
		console.log("Inside statfile() ");
		return false;
	}
	
	var r = Java.use("com.devadvance.rootinspector.Root");
	r.checkRootMethod0.implementation = function(ret){
		console.log("Inside checkRootMethod0() ");
		return false;
	}

	var r = Java.use("com.devadvance.rootinspector.Root");
	r.checkRootMethod1.implementation = function(ret){
		console.log("Inside checkRootMethod1() ");
		return false;
	}

	var r = Java.use("com.devadvance.rootinspector.Root");
	r.checkRootMethod2.implementation = function(ret){
		console.log("Inside checkRootMethod2() ");
		return false;
	}

	var r = Java.use("com.devadvance.rootinspector.Root");
	r.checkRootMethod3.implementation = function(ret){
		console.log("Inside checkRootMethod3() ");
		return false;
	}

	var r = Java.use("com.devadvance.rootinspector.Root");
	r.checkRootMethod4.implementation = function(ret){
		console.log("Inside checkRootMethod4() ");
		return false;
	}

	var r = Java.use("com.devadvance.rootinspector.Root");
	r.checkRootMethod5.implementation = function(ret){
		console.log("Inside checkRootMethod5() ");
		return false;
	}

	var r = Java.use("com.devadvance.rootinspector.Root");
	r.checkRootMethod6.implementation = function(ret){
		console.log("Inside checkRootMethod6() ");
		return false;
	}

	var r = Java.use("com.devadvance.rootinspector.Root");
	r.checkRootMethod7.implementation = function(ret){
		console.log("Inside checkRootMethod7() ");
		return false;
	}

	var r = Java.use("com.devadvance.rootinspector.Root");
	r.checkRootMethod8.implementation = function(ret){
		console.log("Inside checkRootMethod8() ");
		return false;
	}

	var r = Java.use("com.devadvance.rootinspector.Root");
	r.checkRootMethod9.implementation = function(ret){
		console.log("Inside checkRootMethod9() ");
		return false;
	}

	var r = Java.use("com.devadvance.rootinspector.Root");
	r.checkRootMethod10.implementation = function(ret){
		console.log("Inside checkRootMethod10() ");
		return false;
	}

	var r = Java.use("com.devadvance.rootinspector.Root");
	r.checkRootMethod11.implementation = function(ret){
		console.log("Inside checkRootMethod11() ");
		return false;
	}

	var r = Java.use("com.devadvance.rootinspector.Root");
	r.checkRootMethod12.implementation = function(ret){
		console.log("Inside checkRootMethod12() ");
		return false;
	}

	var r = Java.use("com.devadvance.rootinspector.Root");
	r.checkRootMethod13.implementation = function(ret){
		console.log("Inside checkRootMethod13() ");
		return false;
	}

	var r = Java.use("com.devadvance.rootinspector.Root");
	r.checkRootMethod14.implementation = function(ret){
		console.log("Inside checkRootMethod14() ");
		return false;
	}	

});
