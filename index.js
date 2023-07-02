
var vidName = document.querySelector('.vid-name')
var vd = document.querySelector('video')
var name = vd.id

vidName.innerHTML = name

if(vd.controls == true) {
    document.querySelector('.vid-name-container').style.display = 'flex'
}else {
    document.querySelector('.vid-name-container').style.display = 'none'
}