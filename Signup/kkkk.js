function show(a){
    console.log('“Hello”' + a);
    }
function hide(callback){
    var a = '“NavGurukul”';
    callback(a);
    }
    hide(show);