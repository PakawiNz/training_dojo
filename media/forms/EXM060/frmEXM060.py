from django.shortcuts import render, HttpResponse
import json

def load(request):
    return render(request,'minimal-frame.html',{'widget':'forms/EXM060/frmEXM060'})

def word (request):
    params = json.loads(request.body)
    text1 = params['txtTest1']['value']
    text2 = params['txtTest2']['value']
    result = {'result' : text1.count(text2)}
    return HttpResponse(json.dumps(result))
