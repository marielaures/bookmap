from django.db import models


class Pin(models.Model):
    name = models.CharField(max_length=150)
    latitude = models.FloatField()
    longitude = models.FloatField()

    def __str__(self):
        return "Pin(%s, lat=%f, long=%f)" % (
            self.name,
            self.latitude,
            self.longitude,
        )

    def as_dict(self):
        return {
            'name': self.name,
            'lat': self.latitude,
            'long': self.longitude,
        }
