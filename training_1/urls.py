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
    
    url(r'^EXM010/$',          'media.forms.EXM010.frmEXM010.load'),      # LOAD TEMPLATE
    url(r'^EXM010/calc/$',     'media.forms.EXM010.frmEXM010.calc'), # CALCULATE WITH AJAX
    url(r'^EXM060/$',          'media.forms.EXM060.frmEXM060.load'),
    url(r'^EXM060/word/$',     'media.forms.EXM060.frmEXM060.word'),
    url(r'^EXM070/(?P<method>.*)/$', 'media.forms.EXM070.frmEXM070.calculator'),
    url(r'^EXM070/$', 'media.forms.EXM070.frmEXM070.load'),
)
