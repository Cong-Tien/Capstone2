document.querySelector('#submit').onclick=function() {
    var user = new User();
    user.email= document.querySelector('#email').value;
    user.password= document.querySelector('#password').value;
    user.name= document.querySelector('#name').value;
    user.gender= Gender();
    user.phone= document.querySelector('#phone').value;

    console.log(user.gender,user);
    var promise = axios({
        url:'https://shop.cyberlearn.vn/api/Users/signup',
        method:'POST',
        data:user
    });
    promise.then(function(result){
        console.log(result.data.content);
        alert('successfull')
    });
    promise.catch(function(err){
        console.log(err);
        alert('email already in used')
    });
}
function Gender(gender){
    if(document.querySelector('#gender1').checked) {
        return gender = true;
    }else if (document.querySelector('#gender2').checked) {
        return gender = false;
    }
}