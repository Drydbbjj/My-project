from django.db import models
from django.contrib.auth.models import User

class Person(User):
    dob = models.DateField(null=True, blank=True)
    accept = models.BooleanField(default=False)
    pic = models.ImageField(upload_to='profile_pics/%Y/%m/%d', null=True, blank=True)
    bio = models.CharField(max_length=200, null=True, blank=True)
    city = models.CharField(max_length=70, null=True, blank=True)
    country = models.CharField(max_length=70, null=True, blank=True)
    profession = models.CharField(max_length=80, null=True, blank=True)
    bgpic = models.ImageField(upload_to='bg_pics/%Y/%m/%d', null=True, blank=True)
    followers = models.IntegerField(default=0)

class Post(models.Model):
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    time = models.DateTimeField(auto_now_add=True)
    type = models.CharField(max_length=20)
    desc = models.CharField(max_length=150, null=True, blank=True)
    video = models.FileField(upload_to='videos/%Y/%m/%d', null=True, blank=True)
    image = models.ImageField(upload_to='images/%Y/%m/%d', null=True, blank=True)
    text = models.TextField(max_length=1500, null=True, blank=True)
    likes = models.IntegerField(default=0)

class Liked(models.Model):
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    liked = models.IntegerField()
    comment = models.CharField(max_length=500, null=True, blank=True)

class Comment(models.Model):
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    comment = models.CharField(max_length=250)
    time = models.DateTimeField(auto_now_add=True)

class Following(models.Model):
    follower = models.ForeignKey(Person, on_delete=models.CASCADE, related_name="follower")
    following = models.ForeignKey(Person, on_delete=models.CASCADE, related_name="following")

class Notification(models.Model):
    sender = models.ForeignKey(Person, on_delete=models.CASCADE, related_name="sender")
    receiver = models.ForeignKey(Person, on_delete=models.CASCADE, related_name="receiver")
    read = models.BooleanField(default=False)
    message = models.CharField(max_length=100)
    time = models.DateTimeField(auto_now_add=True)