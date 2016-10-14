from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

import views as master_views

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'frontend_test.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', master_views.home),
    url(r'^EXM060/$', 'media.forms.EXM060.frmEXM060.load'),
    url(r'^EXM060/word/$', 'media.forms.EXM060.frmEXM060.word'),
    url(r'^forms/EXM010/(?P<method>.*)/$', 'media.forms.EXM010.frmEXM010.dispatcher'),
)
