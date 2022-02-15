{% load static %}

// import $ from 'jquery';


// require the viewer, make sure you added it to your project
// dependencies via npm install --save-dev bpmn-js
// import BpmnViewer from 'bpmn-js/lib/NavigatedViewer';

// import EmbeddedComments from './bpmn-js-embedded-comments.js';
// import EmbeddedComments from 'bpmn-js-embedded-comments/comments.js';
import EmbeddedComments from '{% static 'vendor/bpmn-js-embedded-comments.js' %}';

var bpmnViewer = new BpmnJS({
  container: '#js-canvas',
  additionalModules: [
    EmbeddedComments,
    // new Comments()
    // Comments
  ]
});


async function openDiagram(diagram) {

  try {
    await bpmnViewer.importXML(diagram);
    console.log('success!!');
    bpmnViewer.get('canvas').zoom('fit-viewport');
  } catch(err) {
    alert('could not import BPMN 2.0 XML, see console');
    return console.log('could not import BPMN 2.0 XML', err);
  }
}


// file save handling

var $download = $('[data-download]');

async function serialize() {

  try {
    const { xml } = await bpmnViewer.saveXML();

    var encodedData = encodeURIComponent(xml);

    $download.attr({
      'href': 'data:application/bpmn20-xml;charset=UTF-8,' + encodedData
    });
  } catch (err) {

    console.log('failed to serialize BPMN 2.0 xml', err);
  }
}

bpmnViewer.on('comments.updated', serialize);
bpmnViewer.on('commandStack.changed', serialize);

bpmnViewer.on('canvas.click', function() {
  bpmnViewer.get('comments').collapseAll();
});


// we use stringify to inline a simple BPMN diagram
// const url = './media/xml/pizza-collaboration-annotated.bpmn';
const url = '../../media/xml/pizza-collaboration-annotated.bpmn';

const fetchDiagram = (url) => {
    return fetch(url).then(response => response.text());
}


const drawCanvas = async (url) => {
    console.log(url);
    const bpmnXML = await fetchDiagram(url);
    openDiagram(bpmnXML);
}

$(document).bind('load', drawCanvas(url));

