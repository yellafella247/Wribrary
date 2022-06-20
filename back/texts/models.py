from django.db import models

# Create your models here.
class Text(models.Model):
  title = models.CharField(max_length=50, default=None)
  content = models.TextField(default=None)
  user = models.ForeignKey(
    'jwt_auth.User',
    related_name='texts',
    on_delete= models.CASCADE,
  )

def __str__(self):
  return f'{self.title}'