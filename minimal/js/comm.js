$(document).ready(function () {
    $('#app').addClass('show')
    $('.openNav').click(function() {
        $('.mainNav').addClass('open')
        $('.closeNav').fadeIn(500)
    })

    $('.closeNav').click(function() {
        $('.mainNav').removeClass('open')
        $('.closeNav').fadeOut(500)
    })
})

function toChange(target) {
    $('.cover').fadeIn()
    setTimeout(function() {
        location = `./${target}`
    },1500)
}

function toBack() {
    $('.cover--index').fadeIn()
    setTimeout(function() {
        location = '../'
    },1500)
}