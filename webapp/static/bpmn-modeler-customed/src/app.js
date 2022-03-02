import $ from "jquery";
import Modeler from "bpmn-js/lib/Modeler";

import propertiesPanelModule from "bpmn-js-properties-panel";
import propertiesProviderModule from "bpmn-js-properties-panel/lib/provider/camunda";
import camundaModdleExtension from "camunda-bpmn-moddle/lib";

// import "bpmn-js/dist/assets/diagram-js.css";
// import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css";
// import "bpmn-js-properties-panel/dist/assets/bpmn-js-properties-panel.css";
// 
import customDescriptor from "./camundaDescriptor.json";

const fetchDiagram = (url) => {
    return fetch(url).then(response => response.text());
}

const drawCanvas = async (url) => {

  // get bpmn XML data
  const bpmnXML = await fetchDiagram(url);
  
  // Custom Modeler
  class CustomModeler extends Modeler {}
  
  CustomModeler.prototype._modules = [
    ...Modeler.prototype._modules,
    propertiesPanelModule,
    propertiesProviderModule
  ];
  
  // new modeler
  const bpmnModeler = new CustomModeler({
    container: '#js-canvas',
    keyboard: {
      bindTo: document
    },
    propertiesPanel: {
      parent: "#properties-panel-parent"
    },
    additionalModules: [camundaModdleExtension],
    moddleExtensions: {
      camunda: customDescriptor
    }
  });
  
  // import diagram
  bpmnModeler.importXML(bpmnXML, function(err) {
    
    if (err) {
      return console.error('could not import BPMN 2.0 diagram', err);
    }
    
    // access viewer components
    const canvas = bpmnModeler.get("canvas");
    
    // zoom to fit full viewport
    canvas.zoom("fit-viewport");
    
  });
}

// -------------------------------------------------------------
// load external diagram file via AJAX and open it
const file_name = $("#file_name").text();
//console.log(file_name);
//const url = "./" + file_name;
const url = "../../media/xml/" + file_name;

$(document).bind('load', drawCanvas(url));
