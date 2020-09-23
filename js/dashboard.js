$(document).ready(function() {
    $('.select-active').each(function(i, obj){
        var id = $(obj).attr('id');
        var value = $(obj).data('select');
        var v = $('#'+id+' option[value="'+value+'"]').attr('selected', true);
        console.log(v);
    });
});
