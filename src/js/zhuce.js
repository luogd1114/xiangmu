
        var nation = document.querySelector('#nation');
        var  region = document.querySelector('#region');
        var  note = document.querySelector('#note');
        var  password = document.querySelector('#password');
        var birth  = document.querySelector('#birth ');

        $('.btn').click((e) => {
            e = e || window.event;
            e.preventDefault();

            var Nat = nation.value;
            var Reg = region.value;
            var Not = note.value;
            var upass = password.value;
            var Bir = birth.value;
         
            

            var xhr = new XMLHttpRequest();

            xhr.open('post', 'http://localhost/server/cart.php');

            xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');

            xhr.onload = function () {
                var res = JSON.parse(xhr.responseText)
                if (res.code === 1) {
                    window.location.href = './index.html'
                }
            }

            xhr.send( `nation=${Nat}&region=${Reg}&note=${Not}&password=${upass}&birth=${Bir}`);

        })





