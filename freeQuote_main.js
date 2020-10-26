$(document).ready(function(){
    $('.required-inp').on('blur', (event)=>{

        let curr = $(event.currentTarget);
        
        let currParent = curr.parent();

        if(curr.val() === ""){
            currParent.find('.warning-text').css({
                visibility: 'visible'
            });
        }else{
            currParent.find('.warning-text').css({
                visibility: 'hidden'
            });
        }
    });


    /* checkbox events */
    $('.checkbox-ele').on('click', (event)=>{
        
        let curr = $(event.currentTarget)[0];

        let parCurr = $(curr).closest('.checkbox-comp');
        
        curr.checked = !curr.checked;

        if(curr.checked){
            $(parCurr).css({
                boxShadow: '0px 0px 5px 5px #e8715f'
            });
        }
        else{
            $(parCurr).css({
                boxShadow: '0px 0px 5px 5px #3d3a3a'
            });
        }
    });

    $('.checkbox-comp').on('click', (event)=>{
        let curr = $(event.currentTarget);
        
        let checkBox = curr.find('.checkbox-ele')[0];

        checkBox.checked = !checkBox.checked;

        if(checkBox.checked){
            $(curr).css({
                boxShadow: '0px 0px 5px 5px #e8715f'
            });
        }
        else{
            $(curr).css({
                boxShadow: '0px 0px 5px 5px #3d3a3a'
            });
        }
    });

    $('.container-side-bar').on('mouseenter', (event)=>{
        let curr = $(event.currentTarget).find('.back-number');
        curr.addClass('theme-color');
        curr.removeClass('back-number-color');
    }).on('mouseleave', (event)=>{
        let curr = $(event.currentTarget).find('.back-number');
        curr.removeClass('theme-color');
        curr.addClass('back-number-color');
    });

});