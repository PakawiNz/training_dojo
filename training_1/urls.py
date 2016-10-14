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
    url(r'^forms/EXM010/(?P<method>.*)/$', 'media.forms.EXM101.frmEXM101.dispatcher'),
    # url(r'^EXM100/(\d+)/(\d+)/$', 'media.forms.EXM100.frmEXM100.LCM'),
    url(r'^EXM100/$', 'media.forms.EXM100.frmEXM100.load'),
    url(r'^EXM100/LCM/$', 'media.forms.EXM100.frmEXM100.LCM'),
    url(r'^EXM100/CLR/$', 'media.forms.EXM100.frmEXM100.CLR'),
    url(r'^EXM100/GCD/$', 'media.forms.EXM100.frmEXM100.GCD'),
    url(r'^EXM100/WORDCOU/$', 'media.forms.EXM100.frmEXM100.WORDCOU'),


)
