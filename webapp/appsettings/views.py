from django.views.generic import TemplateView

class CView(TemplateView):
    """ settings View Class """
    ## template 
    TEMPLATE = '_appsettings.hbs'
    screen_name = 'appsettings'
    template_name = TEMPLATE
    ## context
    def get_context_data(self, **kwargs):
        context = super(CView, self).get_context_data(**kwargs)
        ## get data with service
        sessuuid = self.request.session.get('sessuuid', '')
        dict_cxt = {
            "title": "BPMN Application Settings",
            "SESSUUID": sessuuid,
            "screen_name": self.screen_name,
        }
        context.update(dict_cxt)
        return context

## root function 
root = CView.as_view()
