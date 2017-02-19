var typerZone = document.getElementById('here');
function typerPlugin(msg,id) {
    if (!id) {
        var id = document.getElementsByTagName('body')[0];
    }
    var output = [''];
    var arr = msg.split('');
    console.log(arr);
    
    (function print() {
        if (arr.length){
            setTimeout(function() {
                output.push(arr.shift());
                var text = output.join('');
                id.innerHTML = text;
                print();
            },50)
        }   
    }())   
};
typerPlugin('function    myFirstCode()    {console.  log(  \'Hello  World\')}',typerZone);
