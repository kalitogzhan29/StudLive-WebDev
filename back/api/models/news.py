from django.db import models

class News(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField()
    pub_date = models.DateField(auto_now=True)

    class Meta:
        verbose_name = verbose_name_plural = 'News'
    
    def __str__(self):
        return f'{self.id}: {self.title}'