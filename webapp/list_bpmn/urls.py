from django.urls import path
from . import views

urlpatterns = [
    path('', views.root, name='list_bpmn'),
]
