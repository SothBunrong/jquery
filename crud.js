const data = [];

const rederTable = ( ) =>{
    let tbody = '';
    data.map((item,index)=>{
        tbody+=`
            <tr class="text-center">
                <td>${item.id}</td>
                <td>${item.username}</td>
                <td>${item.email}</td>
                <td>${item.password}</td>
                <td><img src=${item.profile} width = "50" /></td>
                
                <td>
                    <button class="btn btn-warning"  data-bs-toggle="modal" data-bs-target="#demo" onclick="update(${index})" >Edit</button>
                    <button class="btn btn-danger" onclick="remove(${index})" >Remove</button>
                </td>
            </tr>
        `
    })
    document.querySelector('tbody').innerHTML=tbody;

}
let editIndex=-1;
const addData =()=>{
    const inputId =document.getElementById('id')
    const inputUsername =document.getElementById('username')
    const inputemail =document.getElementById('email')
    const inputpassword =document.getElementById('password')
    const inputprofile =document.getElementById('profile')

    const render = new FileReader();
    render.onload =()=>{
        const users ={
            id :inputId.value,
            username:inputUsername.value,
            email:inputemail.value,
            password:inputpassword.value,
            profile: render.result
        };
        if(editIndex===-1){
            data.push(users);
        }else{
            data[editIndex]=users;
            editIndex=-1;
        }
        rederTable();
        clear();
    }
    if(inputprofile.files[0]){
        render.readAsDataURL(inputprofile.files[0]);
    }
    else{
        alert('Plz chosoe image')
    }
    
}
const update = (index)=>{
    editIndex=index
    const user =data[index];
    document.getElementById('id').value =user.id;
    document.getElementById('username').value =user.username;
    document.getElementById('email').value =user.email;
    document.getElementById('password').value =user.password;
    // alert(index)
}
const clear =()=>{
    document.getElementById('id').value='';
    document.getElementById('username').value='';
    document.getElementById('email').value='';
    document.getElementById('password').value='';
    document.getElementById('profile').value='';
}
const remove = (index)=>{
    data.splice(index,1)
    rederTable();
}