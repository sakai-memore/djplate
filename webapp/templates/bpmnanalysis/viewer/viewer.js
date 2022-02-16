{% load static %}

import EmbeddedComments from '{% static 'vendor/bpmn-js-embedded-comments.js' %}';

function fetchDiagram(url) {
    return fetch(url).then(response => response.text());
}


const drawCanvas = async (url) => {
    
    const bpmnXML = await fetchDiagram(url);
    console.log(url);
    
    // BpmnJS is the BPMN viewer instance
    const bpmnViewer = new BpmnJS({
      container: '#js-canvas',
      keyboard: {
          bindTo: window
      },
      additionalModules: [
        EmbeddedComments,
      ],
    });
    
    // import xml data
    try{
        await bpmnViewer.importXML(bpmnXML);
        
    } catch(err) {
        alert('could not import BPMN 2.0 XML, see console');
        return console.log('could not import BPMN 2.0 XML', err);
    }
    
    // access viewer components
    const canvas = bpmnViewer.get('canvas');
    const overlays = bpmnViewer.get('overlays');
    const eventBus = bpmnViewer.get('eventBus');
    
    // zoom to fit full viewport
    canvas.zoom('fit-viewport');
    
    // process of overlaying
    setOverlays(canvas, overlays);
    
    // file save handling
    const $download = $('[data-download]');
    
    const serialize = async () => {
      try {
        const { xml } = await bpmnViewer.saveXML();
        
        const encodedData = encodeURIComponent(xml);
        
        $download.attr({
          'href': 'data:application/bpmn20-xml;charset=UTF-8,' + encodedData
        });
      } catch (err) {
        console.log('failed to serialize BPMN 2.0 xml', err);
      }
    }
    
    // event for commenting
    bpmnViewer.on('comments.updated', serialize);
    bpmnViewer.on('commandStack.changed', serialize);
    
    bpmnViewer.on('canvas.click', function() {
        bpmnViewer.get('comments').collapseAll();
    });
    
    // element event
    eventBus.on('element.click', 10, (e) => {
      // e.element = the model element
      // e.gfx = the graphical element
      console.log('element.click!');
      const bo = e.element.businessObject;
      const boParent = e.element.parent.businessObject;
      const context = {
        "id": bo.id,
        "type": bo.$type,
        "name": bo.name,
        "parentid": boParent.id,
        "parentType": boParent.$type,
        "parentName": boParent.name,
      }
      window.alert(JSON.stringify(context));
      console.log(context);
    });
    
}

const setFormInputLabel = (overlays, id, formObj) => {
    // generate div tag
    const divTemp = $('<div data-toggle="modal" data-target="#modal-form"><i class="bi bi-info-square"></i></div>');
    // add event function
    divTemp.on("click", function(){
      // console.log('divLabel clicked')
      $('#form').jsonForm(formObj);
    })
    
    // add into overlays
    try{
      overlays.add(id, {
        position:{
          top: -20,
          right: 0
        },
        html: divTemp
      })    
    } catch (err) {
        console.log('not exists target id', err);
    }
}

const setOverlays = (canvas, overlays) => {
    // add event function
    setFormInputLabel(overlays, 'Activity_1duib41', formObj)
}

const url = "../../media/xml/" + "{{file_name}}";

$(document).on('load', drawCanvas(url));
