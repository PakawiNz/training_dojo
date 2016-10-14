from django.shortcuts import render, HttpResponse
import json

def load(request):
    return render(request,'minimal-frame.html',{'widget':'forms/EXM010/frmEXM010'})

def calc(request):
    params = json.loads(request.body)
    result = {'HELLO WORLD' : 'NICE TO MEET YOU'}
    return HttpResponse(json.dumps(result))
