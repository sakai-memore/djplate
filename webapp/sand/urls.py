from django.urls import path
from . import views

urlpatterns = [
    path('overlays/', views.overlays, name='sand_overlays'),
    path('commenting/', views.commenting, name='sand_commenting'),
    path('interaction/', views.interaction, name='sand_interaction'),
    path('properties/', views.properties, name='sand_properties'),
    path('slider/', views.slider, name='sand_slider'),
    path('templating/', views.templating, name='sand_templating'),
]
