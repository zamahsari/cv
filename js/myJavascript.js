$(function() {
    $('body').on('click', '#myMenu', function(){
        let urlLink=this.href;
        console.log(urlLink);
        $.get(urlLink, function(response, status){
            console.log(status);
            $('#content').html(response);
        });

        return false; 
    });
});