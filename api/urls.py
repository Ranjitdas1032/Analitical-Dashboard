from django.contrib import admin
from django.urls import path,include
from . import views

urlpatterns = [
    path('datatable_api',views.datatable_api,name="api-datatable-api"),
    path('total_views',views.total_views,name="api-total-views")
]