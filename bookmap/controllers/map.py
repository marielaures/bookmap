from django.http import HttpResponse
from django.shortcuts import render


class MapController(object):
    def index(request):
        return render(request, 'bookmap/map_index.html')
