from django.shortcuts import render
from django.views import View
import json
import requests
import uuid
from shared.dataobjects import address
from django.core import serializers
from rest_framework.renderers import JSONRenderer
from django.forms.models import model_to_dict

### view 
class CView(View): ## View Class based
    def get(self, request, *args, **kwargs):
        TEMPLATE ='_sandbox.hbs'
        sessuuid = request.session.get('sessuuid', uuid.uuid4())
        request.session['sessuuid'] = str(sessuuid)
        request.session.set_expiry(0)
        print(sessuuid)
        print(request.session.get_expiry_age())
        print(request.session.get_expire_at_browser_close())
        ## json_str = json.dumps(data, indent=2)
        ## res = requests.get('http://localhost:8000/api/json/code/pref_codes/')
        ## res = requests.get('http://localhost:8000/api/dao/address/1/')
        instance = address.AddressModel.objects.get(address_id="1")
        dct = model_to_dict(instance)
        serializer = address.AddressSerializer(data=dct)
        # serializer.is_valid()
        # print(serializer.data)
        context = {
            "title": "Django",
            "header": "sandbox area",
            "SESSUUID": sessuuid,
            # "json": res.json(),
            "json": JSONRenderer().render(dct)
        }
        return render(request, TEMPLATE, context)

root = CView.as_view()

