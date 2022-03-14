import $ from 'jquery';
import 'bootstrap';

//-- project libs of UtilClass
import SessionStateStore from './lib/SessionStateStore';
import DataUtil from  './lib/DataUtil';
import HbsUtil from  './lib/HbsUtil';

// -- Custom Modeler
import { CustomBpmnViewerFactory } from "./viewer/CustomBpmnViewerFactory";

import './viewer/viewer.css'

// local setting for debug
// TODO: remove on production
const init = (sessuuid) => {
  const sessdata = {
    'id': '1',
    'file_name': 'qr-code.bpmn',
    'SESSUUID': sessuuid,
    'SCREEN_NAME': 'Viewer'
  }
  SessionStateStore.saveState(sessuuid, sessdata);
}

const displayDiagram = async (xml_data, file_name, id="") => {
  try {
    const result = bpmnViewer.importXML(xml_data);
    const { warnings } = result;
    console.log("Open a file :" + file_name);
    $('#file_name').text(file_name);
    $('#id').text(id)
  } catch (err) {
    console.log(err.message, err.warnings);
    alert('could not import BPMN 2.0 XML, see console');
  }
}

// draw canvas: document ready action
const drawCanvas = (bpmnXML, file_name, id) => {
  
  // import xml into canvas
  displayDiagram(bpmnXML, file_name, id);
  
  // get canvas
  const canvas = bpmnViewer.get("canvas");
  // zoom to fit full viewport
  canvas.zoom('fit-viewport');
  // access viewer components
  const overlays = bpmnViewer.get('overlays');
  const eventBus = bpmnViewer.get('eventBus');
  
  
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
    console.log(context);
    $("#btn_modal_form").click();
  });
  
}


const renderHbs = async (sessuuid) => {
  // load session state store
  const stateData = SessionStateStore.loadState(sessuuid);
  const file_name = stateData.file_name;
  const id = stateData.id;
  
  // rendering hbs
  // static path for django
  let STATIC_PATH = $(EL_STATIC_PATH).text();
  if(STATIC_PATH == ''){
    STATIC_PATH = STATIC_PATH_CUSTOMED;
  }

  //// modeler.hbs
  await HbsUtil.renderComponent(EL_APP, STATIC_PATH + HBS_MAIN_TEMPLATE, stateData);
  $(EL_COMPONENTS).html(divComponents);
  console.log(`render ${STATIC_PATH + HBS_MAIN_TEMPLATE} ...`);
  
  //// componets/*.hbs  // -- Can not use ary.forEach
  for(let itm of aryHbsComponents) {
    console.log(`render ${STATIC_PATH + itm.hbsPath} ...`);
    await HbsUtil.renderComponent(
      itm.el, 
      STATIC_PATH + itm.hbsPath, 
      itm.data
    );
  }
  
  // new Bpmn Viewer
  const factory = new CustomBpmnViewerFactory()
  bpmnViewer = factory.get_instance(EL_CANVAS)
  
  // Event- Actions
  $("#btn_modal_form").click(()=>{
    console.log('#btn_modal_form clicked!');
    $("#modal-form").show();
  });
  
  // get bpmn XML data
  const url = MEDIA_PATH + file_name;
  const bpmnXML = await DataUtil.fetchData(url);
  // 
  drawCanvas(bpmnXML, file_name, id);

};

// -------------------------------------------// document.ready
// variables
const MEDIA_PATH = '../../media/xml/';
const HBS_MAIN_TEMPLATE = './viewer/viewer.hbs';
const aryHbsComponents = [
  {el: '#form-component', data: {}, hbsPath: './viewer/components/form-component.hbs'},
];
const divComponents = `
  <div id='form-component'></div>
`;

let bpmnViewer = {};

// TODO: get session id
const sessuuid = '999999999999999';
// save session state for debug
// TODO: remove 
init(sessuuid);

const EL_APP = "#app";
const EL_COMPONENTS = "#div-components";
const EL_CANVAS = "#js-canvas";
const EL_PROPERTIES_PANEL_PARENT = "#properties-panel-parent";
const EL_DROP_AREA = "#row-main";

// For Server Side Rendering
const EL_STATIC_PATH = "#STATIC-PATH";
const STATIC_PATH_CUSTOMED = "../../../static/modeler-customed/src";

$(document).on('load', renderHbs(sessuuid));
