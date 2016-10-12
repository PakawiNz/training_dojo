from django.shortcuts import render

def home(request):
    return render(request,'minimal-frame.html',{'widget':'forms/EXM020/frmEXM020'})
