from django.views.generic import TemplateView
from django.conf import settings


### Template View
class CView(TemplateView):
    """ Home View Class """
    TEMPLATE = '_home.hbs'
    ## template 
    template_name = TEMPLATE
    ## context
    def get_context_data(self, **kwargs):
        context = super(CView, self).get_context_data(**kwargs)
        sessuuid = self.request.session.get('sessuuid', '')
        dict_cxt = {
            "title": "BPM Modeling and Analysis",
            "APP_NAME": settings.APP_NAME,
            "SESSUUID": sessuuid,
        }
        context.update(dict_cxt)
        return context

root = CView.as_view()
