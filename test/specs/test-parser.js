



http('/test/mcss/abstract.mcss', function(text){
    var date = Date.now();
    mcss({
        filename: '/test/mcss/abstract.mcss'
    }).translate().done(function(text){
        console.log(text)
        console.log(Date.now() - date)
    }).fail(function(err){
        console.log(mcss.error.format(err))
        console.log(err)
        console.log(Date.now() - date)
    })
})




