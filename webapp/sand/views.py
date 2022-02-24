from django.views.generic import TemplateView
from django.conf import settings

### Template View
class COverlaysView(TemplateView):
    TEMPLATE ='_sand_overlays.hbs'
    SCREEN_NAME = TEMPLATE[0:-4]
    ## template 
    template_name = TEMPLATE
    ## context
    def get_context_data(self, **kwargs):
        file_name = "qr-code.bpmn"
        context = super(COverlaysView, self).get_context_data(**kwargs)
        dict_cxt = {
            "title": "BPM Modeling and Analysis",
            "APP_NAME": settings.APP_NAME,
            "SCREEN_NAME": self.SCREEN_NAME,
            "file_name": file_name,
        }
        context.update(dict_cxt)
        return context

overlays = COverlaysView.as_view()

### Template View
class CCommentingView(TemplateView):
    TEMPLATE ='_sand_commenting.hbs'
    SCREEN_NAME = TEMPLATE[0:-4]
    ## template 
    template_name = TEMPLATE
    ## context
    def get_context_data(self, **kwargs):
        file_name = 'pizza-collaboration-annotated.bpmn'
        context = super(CCommentingView, self).get_context_data(**kwargs)
        dict_cxt = {
            "title": "BPM Modeling and Analysis",
            "APP_NAME": settings.APP_NAME,
            "SCREEN_NAME": self.SCREEN_NAME,
            "file_name": file_name,
        }
        context.update(dict_cxt)
        return context

commenting = CCommentingView.as_view()


### Template View
class CInteractionView(TemplateView):
    TEMPLATE ='_sand_interaction.hbs'
    SCREEN_NAME = TEMPLATE[0:-4]
    ## template 
    template_name = TEMPLATE
    ## context
    def get_context_data(self, **kwargs):
        file_name = "qr-code.bpmn"
        context = super(CInteractionView, self).get_context_data(**kwargs)
        dict_cxt = {
            "title": "BPM Modeling and Analysis",
            "APP_NAME": settings.APP_NAME,
            "SCREEN_NAME": self.SCREEN_NAME,
            "file_name": file_name,
        }
        context.update(dict_cxt)
        return context

interaction = CInteractionView.as_view()

### Template View
class CTemplatingView(TemplateView):
    TEMPLATE ='_sand_templating.hbs'
    SCREEN_NAME = TEMPLATE[0:-4]
    ## template 
    template_name = TEMPLATE
    ## context
    def get_context_data(self, **kwargs):
        file_name = "qr-code.bpmn"
        context = super(CTemplatingView, self).get_context_data(**kwargs)
        dict_cxt = {
            "title": "BPM Modeling and Analysis",
            "APP_NAME": settings.APP_NAME,
            "SCREEN_NAME": self.SCREEN_NAME,
            "file_name": file_name,
        }
        context.update(dict_cxt)
        return context

templating = CTemplatingView.as_view()

### Template View
class CPropertiesView(TemplateView):
    TEMPLATE ='_sand_properties.hbs'
    SCREEN_NAME = TEMPLATE[0:-4]
    ## template 
    template_name = TEMPLATE
    ## context
    def get_context_data(self, **kwargs):
        file_name = "qr-code.bpmn"
        context = super(CPropertiesView, self).get_context_data(**kwargs)
        dict_cxt = {
            "title": "BPM Modeling and Analysis",
            "APP_NAME": settings.APP_NAME,
            "SCREEN_NAME": self.SCREEN_NAME,
            "file_name": file_name,
        }
        context.update(dict_cxt)
        return context

properties = CPropertiesView.as_view()

### Template View
class CSliderView(TemplateView):
    TEMPLATE ='_sand_slider.hbs'
    SCREEN_NAME = TEMPLATE[0:-4]
    ## template 
    template_name = TEMPLATE
    ## context
    def get_context_data(self, **kwargs):
        file_name = "qr-code.bpmn"
        context = super(CSliderView, self).get_context_data(**kwargs)
        dict_cxt = {
            "title": "BPM Modeling and Analysis",
            "APP_NAME": settings.APP_NAME,
            "SCREEN_NAME": self.SCREEN_NAME,
            "file_name": file_name,
        }
        context.update(dict_cxt)
        return context

slider = CSliderView.as_view()
