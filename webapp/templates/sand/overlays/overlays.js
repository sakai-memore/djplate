const fetchDiagram = (url) => {
    return fetch(url).then(response => response.text());
}

/**
 * Open diagram in our viewer instance.
 *
 * @param {String} url path to BPMN 2.0 xml 
 */
const drawCanvas = async (url) => {

  // get bpmn XML data
  const bpmnXML = await fetchDiagram(url);
  
  const bpmnViewer = new BpmnJS({
    container: '#js-canvas',
    keyboard: {
      bindTo: window
    },
  });
  
  // import diagram
  bpmnViewer.importXML(bpmnXML, function(err) {
    
    if (err) {
      return console.error('could not import BPMN 2.0 diagram', err);
    }
    
    // access viewer components
    const canvas = bpmnViewer.get('canvas');
    const overlays = bpmnViewer.get('overlays');
    
    // zoom to fit full viewport
    canvas.zoom('fit-viewport');
    
    // process of overlaying
    setOverlays(canvas, overlays);
    
  });
}

const setFormInputLabel = (overlays, id, formObj) => {
    // generate div tag
    const divTemp = $('<div data-toggle="modal" data-target="#modal-form"><i class="bi bi-info-square"></i></div>');
    // add event function
    divTemp.bind("click", function(){
      // console.log('divLabel clicked')
      $('#form').jsonForm(formObj);
    })
    // add into overlays
    overlays.add(id, {
      position:{
        top: -20,
        right: 0
      },
      html: divTemp
    })    
}

const addDiscussionMarker = (canvas, id) => {
    canvas.addMarker(id, 'needs-discussion');
}

// local functions
const overlayHtml = function(overlays, id, msg){
    // attach an overlay to a node
    const html = '<div class="bpmn-note" id="' + id + '">' + msg + '</div>'
    overlays.add(id, 'note', {
      position: {
        bottom: 0,
        right: 0
      },
      html: html
    });
    return html
}

const setOverlays = (canvas, overlays) => {
    // overlay html
    const scan_ok_div = overlayHtml(overlays, 'SCAN_OK', 'Mixed up the labels?');
    const scan_qr_code_div = overlayHtml(overlays, 'SCAN_QR_CODE', "I don\'t shrink beyond 100%");
    
    // add marker
    addDiscussionMarker(canvas, 'SCAN_OK');
    
    // add event function
    setFormInputLabel(overlays, 'SCAN_QR_CODE', formObj)
}


// -------------------------------------------------------------
// load external diagram file via AJAX and open it
const url = "../../media/xml/" + "{{file_name}}";
//const url = "../../media/xml/" + "qr-code.bpmn";

$(document).bind('load', drawCanvas(url));
