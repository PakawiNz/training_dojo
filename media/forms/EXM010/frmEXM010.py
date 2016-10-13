from django.shortcuts import render, HttpResponse
import json

def dispatcher(request,method):
    params = json.loads(request.body)
    result = {'HELLO WORLD' : 'NICE TO MEET YOU %s'%(method), 'DATA': params}
    return HttpResponse(json.dumps(result))
