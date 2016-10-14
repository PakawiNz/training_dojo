from django.shortcuts import render, HttpResponse
import json

def load(request):
    return render(request,'minimal-frame.html',{'widget':'forms/EXM100/frmEXM100'})

def LCM(request):
    params = json.loads(request.body)
    num1 = int(params['txtint1']['value'])
    num2 = int(params['txtint2']['value'])

    lc = num1 * num2 / gcd(num1,num2)
    result = {'lcm':lc}
    return HttpResponse(json.dumps(result))

def GCD(request):
    params = json.loads(request.body)
    num1 = int(params['txtint1']['value'])
    num2 = int(params['txtint2']['value'])

    gc = gcd(num1,num2)
    result = {'gcd':gc}
    return HttpResponse(json.dumps(result))

def gcd(a,b):
    while b > 0:
        a,b = b,a % b
    return a

def WORDCOU(request):
    params = json.loads(request.body)
    txt11 = params['txt1']['value']
    txt22 = params['txt2']['value']

    
    count1 = txt11.count(txt22)

    result = {'word':count1}
    return HttpResponse(json.dumps(result))


