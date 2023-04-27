from django.db import models
from api.models import Organization


class Event(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField()
    pub_date = models.DateField()
    event_date = models.DateField()
    organization = models.ForeignKey(Organization, on_delete=models.CASCADE, related_name='events',
                                     null=True)

    class Meta:
        verbose_name = 'Event'
        verbose_name_plural = 'Events'
    
    def __str__(self):
        return f'{self.id}: {self.title}'