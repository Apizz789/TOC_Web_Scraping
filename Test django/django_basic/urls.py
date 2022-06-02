"""django_basic URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from blogs import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('home/',views.hello),
    path('test/',views.hellojson),
    path('smartphone/',views.Getsmartphone),
    path('tablet/',views.Gettablet),
    path('labtop/',views.Getlabtop),
    path('audio/',views.Getaudio),
    path('wearable/',views.Getwearable),
    path('tvandvideo/',views.Gettv_audio),
    path('appliance/',views.Getappliance),
    path('drink/',views.Getdrink),
    path('groceries/',views.Getgroceries),
    path('menfashion/',views.Getmenfashion),
    path('womenfashion/',views.Getwomenfashion),
    path('sportbag/',views.Getsportbag),
    path('fitness/',views.Getfitness),
    path('compare/',views.Getcompare),
    path('realtime/',views.Getrealtime),
    path('flashsale/',views.Getflashsale)
]
