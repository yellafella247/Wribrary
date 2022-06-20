from django.urls import path
from .views import TextDetailView, TextListView, TextGroupView

urlpatterns = [
  path('', TextListView.as_view()),
  path('<int:pk>/', TextDetailView.as_view()),
  path('group/<int:user>/', TextGroupView.as_view())
]