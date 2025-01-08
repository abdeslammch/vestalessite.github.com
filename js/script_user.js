const connect = () => {
    console.log("init login form events listener");
    const email = $("#loginEmail").val();
    const password = $("#loginPassword").val();
    // envoie à une base de données
    
}


const initFormEventsListener = () => {
    $('#loginSubmit').on('click', connect);
}

const initEventListener = () => {
    initFormEventsListener();
}



$(document).ready(initEventListener);