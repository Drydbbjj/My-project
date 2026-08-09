from django.urls import path
from apple import views
from apple import searcher
app_name = 'apple'

urlpatterns = [
    path('index', views.index, name = "index"),
    path('login/', views.Login.as_view(), name = "login"),
    path('signup/',views.Signup.as_view(),name = "signup"),
    path('home/',views.Home.as_view(), name = 'home'),
    path('logout/',views.logout_user,name = "logout"),

    path('like_post/',views.like_post,name = "like_post"),
    path('like_post',views.like_post,name = "like_post"),
    path('remove_like/',views.remove_like,name = "remove_like"),

    path('profile/',views.profile, kwargs={'personid' :1 }, name = "profile"),
    path('profile',views.profile, kwargs={'personid' :1}, name = "profile"),

    # profile updates
    path('update/pic/',views.pic_update,name = "update-pic"),
    path('update/bgpic/',views.bgpic_update,name = "update-bgpic"),
    path('update/profession/',views.pro_update,name = "update-pro"),
    path('update/bio/',views.bio_update,name = "update-bio"),
    path('update/city-country/',views.cc_update,name = "update-cc"),

    #commenting
    path('showcomments/',views.showComments,name = "showcomments"),
    path('addcomment/',views.addComment,name = "addcomment"),
    #follow-nfollow
    path('follow/',views.follow,name = "follow"),
    path('unfollow/',views.unfollow,name = "unfollow"),

    #searching
    path('search/', searcher.Searcher.as_view(), name = "search"),
    path('search', searcher.Searcher.as_view(), name = "search"),

    #liked
    path('liked/', searcher.liked_page, name = "liked"),
    path('liked', searcher.liked_page, name = "liked"),

    #delete post
    path('delete/<int:postid>/', searcher.delete_post, name = "deletepost"),

    #notifications
    path('notifications/<int:activeid>/', searcher.notification_handler, name = "notifications"),
    
    
]