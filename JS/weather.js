function onGeoOK(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
}

function onGoeErr(){
    alert("Can't find you. No weather for you. :(");
}

// 첫번째 argument : 성공적으로 실행됐을 때 , 두번째 argument : 실패했을 때
navigator.geolocation.getCurrentPosition();