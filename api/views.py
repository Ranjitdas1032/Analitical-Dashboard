from django.shortcuts import render
from django.http import JsonResponse
from api.models  import TotalViewsModel, MostWatchedVideos
#from random import randint
# Create your views here.

def total_views(request):
    queryset = TotalViewsModel.objects.all()
    dct = {
        "lables": [],
        "data": []
    }
    #print(queryset)
    for item in queryset:
        dct["lables"].append(item.label)
        dct["data"].append(item.views)
       
    #print(dct)
    # Remember don't chage name here change here the also change in index.js--->ctrl+shift+r

    # return JsonResponse({
    #     "lables" : ["aug","sep","oct","nov","dec","jan"],
    #     "data" : [13950, 19512, 30000,24576,29564,14547]
    # })
    
    return JsonResponse(dct)

def datatable_api(request):
    queryset = MostWatchedVideos.objects.all()
    return JsonResponse({

        "data" : [
        ["Name", "12-05-2024", "Ranjit", ],
        ["column1", "12-05-2024", "column3", ],
        ["Hobby", "12-05-2024", "Coding", ],
        ["column1", "12-05-2024", "column3", ],
        ["column1", "12-05-2024", "Ranjit", ],
        ["column1", "12-05-2024", "column3", ],
        ["column1", "12-05-2024", "column3", ],
        ["column1", "12-05-2024", "column3", ],
        ["column1", "12-05-2024", "Ranjit", ],
        ["column1", "12-05-2024", "column3", ],
        ["column1", "12-05-2024", "column3", ],
        ["column1", "12-05-2024", "column3", ],
            
        ]
    })
