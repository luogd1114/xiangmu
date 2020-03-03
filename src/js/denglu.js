var Inpname = document.querySelector('#username')
var Inppsd = document.querySelector('#password')
$('.btn').click((e)=>{
    e = e || window.event
    e.preventDefault()
    var uname = Inpname.value
    var upsd = Inppsd.value
    var xhr = new XMLHttpRequest();

    xhr.open('post','http://localhost/server/login.php')


    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')

   

    xhr.onload = function(){
        var res = JSON.parse(xhr.responseText)
        if(res.code === 1){
            window.location.href='./index.html'
        }
    }

    xhr.send(`username=${uname}&password=${upsd}`)

   
})
