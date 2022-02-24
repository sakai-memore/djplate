const displayData = () => {
  // console.log('get data ...');
  $(() => {
    const title_name = "Auther";
    const opts = {"title_name": title_name};
    $('#templateSrc').tmpl(opts).appendTo("#template");
  });
  
}

$(document).on('load', displayData());
