// import {formObj} from './components/formObj.js';

console.log(formObj)
// $('#form').jsonForm(formObj)

// fixme
const getSessionStorage = ()=>{
    let ctx = {};
    const uuid = $('#sessuuid').text()
    if(uuid){
        console.log(uuid);
        ctx.uuid = 'hello'
        sessionStorage.setItem(uuid, JSON.stringify(ctx))
        console.log(window.sessionStorage);
    } else {
        console.log('none');
    }
}

$(window).bind("load", getSessionStorage);
$("#displayForm").bind("click", $('form').jsonForm(formObj));
