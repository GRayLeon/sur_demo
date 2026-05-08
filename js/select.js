$(document).ready(function() {
    $('#app').addClass('show')
    setTimeout(function() {
        $('#app').addClass('selectable')
        $('.mouse').addClass('show')
        $('.selectable .toSur').hover(function() {
            $('#app').addClass('selected')
            $('#app').removeClass('minimal').addClass('sur')
        })
        $('.selectable .toMinimal').hover(function() {
            $('#app').addClass('selected')
            $('#app').removeClass('sur').addClass('minimal')
        })
    }, 1000)
})


function toChange(target) {
    $('.cover').fadeIn().addClass(`${target}BG`)
    setTimeout(function() {
        location = `./${target}/index.html`
    },1500)

}