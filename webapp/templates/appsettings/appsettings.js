// fixme
const getSessionStorage = ()=>{
    let ctx = {};
    const uuid = $('#sessuuid').text()
    if(uuid){
        console.log(uuid);
        ctx = sessionStorage.getItem(uuid);
        console.log(ctx);
    } else {
        console.log('none');
    }
}

$(window).bind("load", getSessionStorage);
