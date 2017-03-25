var re = /(\d{1,3})(?=(\d{3})+(?:$|\D))/g;
String.prototype.moneyFormat=function () {
    var val=this;
    if (val == 0) {
        return '0.00';
    }
    val=parseFloat(val).toFixed(2);
    var _val = val.replace(/^0|,|[^0-9.-]/g, '').replace(/\.[\d]{1,}/, function ($1, $2) {
        var _str = $1.replace(/\./g, '');
        return '.' + _str.substr(0, (_str.length > 2 ? 2 : _str.length));
    });
    return _val.replace(re, '$1,');
}
$.prototype.initAmountInput=function(){
    var _this=$(this);
    _this.on('keydown',function(event){
        if(_this.val().split('.')[0].length>=17&&(event.keyCode>=48&&event.keyCode<=57)){
            return false;
        }
    })
    _this.on('input propertychange',function(){
        var _len1=_this.val().length;
        var _start=_this[0].selectionStart;
        var _end=_this[0].selectionEnd;
        var _val=_this.val().replace(/^0|,|[^0-9.]/g,'').replace(/\.[\d]{1,}/,function($1,$2){
            var _str=$1.replace(/\./g,'');
            return '.'+_str.substr(0,(_str.length>2?2:_str.length));
        });
        _this.val(_val.replace(re,'$1,'));
        if(_this[0].selectionStart||_this[0].selectionStart== '0'){
            var _len=_this.val().length-_len1;
            _this[0].selectionStart=_start+_len;
            _this[0].selectionEnd=_end+_len;
        }
        return false;
    })
}
