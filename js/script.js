//map function
function initMap(){
    var map1=new google.maps.Map(document.getElementById('map'),{
        zoom:7,
        center:{lat:11.9139 ,lng:79.8145}
    });
    var marker=new google.maps.Marker({
        position:{lat:11.9139 ,lng:79.8145},
        map:map1
    });
}

var location;

//signup function
function signup(){
    var email = document.getElementById('signUpEmail1').value;
    var password = document.getElementById('signUpPassword1').value;
    var city = document.getElementById('signupCity').value;
    var state = document.getElementById('signupState').value;
    var signupR=[email,password,city,state];
    var name=['email','password','city','state'];

    for( var i=0;i<4;i++){
        if(!signupR[i]){
            alert("Please enter your "+name[i]);
            return false;
        }
    }
    if(email.length<8){
        alert("Please enter a valid email id");
        return false;
    }
    else if(password.length<4){
        alert("password is too weak");
        return false;
    }
    return true;
}

//chat Box

// var chatBoxNo=0;

var messagebox=[];

function openPopup(id,name){
    for(var i=0;i<messagebox.length;i++){
        if(messagebox[i]==id){
            messagebox.splice(i,1);
            messagebox.unshift(id);
        }
    }

    var temp = '<div class="popup-box " id="'+ id +'">';
    temp = temp + '<div class="popup-head">';
    temp = temp + '<div class="popup-head-left">'+ name +'</div>';
    temp = temp + '<div class="popup-head-right"><a href="javascript:closePopup('+ id +');">&#10005;</a></div>';
    temp = temp + '<div style="clear: both"></div></div><div class="popup-messages" id="divClass"></div><div class=textbox> <form id="inputText"><input type="text" id="textarea" placeholder="send a message"></div><div class="sendButton"> <button id="button" onclick="sendMessage()"> send </button><form></div>';


    document.getElementById('body').innerHTML=document.getElementById('body').innerHTML+temp;

    messagebox.unshift(id);
    display_popups();
}

function closePopup(id){
    for(var i=0;i<messagebox.length;i++){
        if(id=messagebox[i]){
            messagebox.splice(i,1);
            document.getElementById(id).style.display="none";
            display_popups();
            return;
        }
    }
}

function display_popups()
{
    var right = 220;

    for(var i=0; i < messagebox.length; i++)
    {
        if(messagebox[i] != undefined)
        {
            var element = document.getElementById(messagebox[i]);
            element.style.right = right + "px";
            right = right + 320;
            element.style.display = "block";
        }
    }
}



//sending message 

function sendMessage(){
    var message = document.getElementById('textarea').value;
    console.log(message);
    document.getElementById('divClass').innerHTML= document.getElementById('divClass').innerHTML +message + "<hr/>";
    document.getElementById('inputText').reset();
}
