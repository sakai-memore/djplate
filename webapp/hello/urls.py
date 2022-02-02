from django.urls import path
from . import views

urlpatterns = [
    path('', views.hello, name='hello'),
    path('form', views.form, name='form'),
]
