const formObj= {
  schema: {
    "type":"object",
    "properties":{
        "integirty":{
            "type":"string",
            "title":"integrity",
            "description":"Is the activity executed correctly?",
            "required":true
        },
        "confidentiality":{
            "type":"string",
            "title":"confidentiality",
            "description":"Is the internal execution of the activity only visible to authorized resources?",
            "required":true
        },
        "availability":{
            "type":"string",
            "title":"availability",
            "description":"Are the resources, needed for the execution of the activity available?"
        },
        "non-repudiation":{
            "type":"string",
            "title":"non-repudiation",
            "description":"If a certain activity is performed, is it non-repudiable?"
        },
        "performance":{
            "type":"string",
            "title":"performance",
            "description":"Is the activity executed within the needed border of time and resource consumption?"
        },
        "resilience":{
            "type":"string",
            "title":"resilience",
            "description":"Can the activity handle the case of failure of one of the involved components?"
        }
    }
  },
  form: [
    "*",
    //{
    //    "key":"integirty",
    //    "type":"textarea",
    //    "htmlClass":"usermood",
    //    "htmlMetaData":{
    //        "style":"border: 1px solid blue",
    //        "data-title":"Mood"
    //    },
    //    "fieldHtmlClass":"input-xxlarge",
    //    "placeholder":"incredibly and admirably great"
    //},
    {
        "type":"help",
        "helpvalue":"<strong>Click on <em>Submit</em></strong> when you're done"
    },
    {
        "type":"submit",
        "title":"Submit"
    }
  ],
  onSubmit: function (errors, values) {
    if (errors) {
      $('#res').html('<p>I beg your pardon?</p>');
    }
    else {
      $('#res').html('<p>' + values.integirty + '</p>');
    }
  }
}

//export formObj;
