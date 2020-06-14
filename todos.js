$("ul").on("click", "li" ,function(){
$(this).toggleClass("completed"); //to cross-off a todo which has been done by the user
})

$("ul").on("click","span" ,function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove(); //to completely delete a todo from the todo list
    });
    event.stopPropagation();

});

$("input[type = 'text']").keypress(function(event){
    if(event.which === 13){ //condition for pressing the enter key
        var todotext = $(this).val(); //taking new todo that is to be added from the input
        $(this).val("") //clearing our input section
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>" + todotext + "</li>"); //adding the new todo to our pre-existing list

    }
})

$("#toggleform").click(function(){
    $("input[type = 'text']").fadeToggle();
});