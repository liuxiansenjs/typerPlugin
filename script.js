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
                console.log(output);
                var text = output.join('');
                id.innerHTML = text;
                print();
            },50)
        }   
    }())   
};