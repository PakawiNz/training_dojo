from django.shortcuts import render, HttpResponse

def home(request):
    return render(request,'minimal-frame.html',{'widget':'forms/EXM010/frmEXM010'})
