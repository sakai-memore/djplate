from django.urls import path
from . import views

urlpatterns = [
    path('overlays/', views.overlays, name='sand_overlays'),
    path('commenting/', views.commenting, name='sand_commenting'),
    path('interaction/', views.interaction, name='sand_interaction'),
    path('properties/<int:pk>', views.properties, name='sand_properties'),
    path('templating/', views.templating, name='sand_templating'),
]
