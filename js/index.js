const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')

$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)

function handlePlay() {
    $video.play()
    $play.hidden = true
    $pause.hidden = false
    console.log('Le estas dando play')
}

function handlePause() {
    $video.pause()
    $play.hidden = false
    $pause.hidden = true
    console.log('Le estas dando pausa')
}

$backward.addEventListener('click', handleBackward)

function handleBackward() {
    $video.currentTime -= 10
    console.log('Para atras 10 segundos')
}

$forward.addEventListener('click', handleforward)

function handleforward() {
    $video.currentTime += 10
    console.log('Para adelante 10 segundos',$video.currentTime)
}