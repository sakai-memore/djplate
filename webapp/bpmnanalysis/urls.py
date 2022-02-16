from django.urls import path, include

urlpatterns = [
    path('viewer/', include('bpmnanalysis.viewer.urls')),
]
