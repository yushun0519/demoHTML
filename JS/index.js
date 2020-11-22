var test = document.getElementById( 'test' )
var color = document.getElementById( 'test' ).style.color
// console.log( test.innerText )
// test.style.color = 'red'
// test.style.backgroundColor = 'black'
// test.innerHTML = '<span style="color : red;">span要素に変更したよ！</span>'
function countUp () {
    count = Number( document.getElementById('count').innerText )
    value = Number( count + 1 )
    document.getElementById('count').innerText = value
}
function changeColor () {
    if ( document.getElementById( 'test' ).style.color == 'black' ) {
        document.getElementById( 'test' ).style.color = 'red'
        color = 'red'
    } else {
        document.getElementById('test').style.color = 'black'
        color = 'black'
    }
}
function onMouseOver () {
    document.getElementById( 'test' ).style.color = 'green'
}
function onMouseOut () {
    document.getElementById( 'test' ).style.color = color
}
function changeBackgroundColor () {
    if ( document.getElementById( 'body' ).style.backgroundColor == 'black' )
        document.getElementById( 'body' ).style.backgroundColor = 'white'
    else
        document.getElementById( 'body' ).style.backgroundColor = 'black'
}
function alert10 () {
    alert( '10秒経過しました！' )
}
function countTime10 () {
    setTimeout( alert10, 10000 )
}