const fetchDiagram = (url) => {
    return fetch(url).then(response => response.text());
}

/**
 * Open diagram in our viewer instance.
 *
 * @param {String} url path to BPMN 2.0 xml 
 */

const drawCanvas = async (url) => {
  var jsconsole = document.querySelector('#js-console');
  
  function log() {
    jsconsole.value += Array.prototype.slice.call(arguments).map(function(e) {
      return String(e);
    }).join(' ');
    
    jsconsole.value += '\n';
    jsconsole.scrollTop = jsconsole.scrollHeight;
  }
  
  // get bpmn XML data
  const bpmnXML = await fetchDiagram(url);
  
  const bpmnViewer = new BpmnJS({
    container: '#js-canvas',
    height: 400,
    keyboard: {
      bindTo: window
    },
  });
  
  // import diagram
  bpmnViewer.importXML(bpmnXML, function(err) {
    
    if (err) {
      return console.error('could not import BPMN 2.0 diagram', err);
    }
    
    // process of overlaying
    var eventBus = bpmnViewer.get('eventBus');

    // you may hook into any of the following events
    var events = [
      //'element.hover',
      'element.click',
    ];

    events.forEach(function(event, bpmnViewer) {

      eventBus.on(event,bpmnViewer, function(e) {
        // e.element = the model element
        // e.gfx = the graphical element
        const bo = e.element.businessObject;
        const boParent = e.element.parent.businessObject;
        log(event, 'on', 'id: ' + bo.id , ', type: ' + bo.$type, ', name: ' + bo.name);
        log('parent id: ' + boParent.id , ', parent type: ' + boParent.$type, ', parent name: ' + boParent.name);
      });
    });


    // Option 2:
    // directly attach an event listener to an elements graphical representation

    // each model element a data-element-id attribute attached to it in HTML

    // select the end event
    var endEventNode = document.querySelector('#js-canvas [data-element-id=END_EVENT]');
    endEventNode.addEventListener('click', function(e) {
      alert('clicked the end event!');
    });
    
  });
}


// -------------------------------------------------------------
// load external diagram file via AJAX and open it
const url = "../../media/xml/" + "{{file_name}}";

$(document).bind('load', drawCanvas(url));
