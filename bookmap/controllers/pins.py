from django.http import JsonResponse

from bookmap.models import Pin

class PinsController(object):
    def list(request):
        pins = Pin.objects.all()
        return JsonResponse([x.as_dict() for x in pins], safe=False)
