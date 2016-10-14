from django.shortcuts import render, HttpResponse
import json
import operator

def dispatcher(request,method):
    params = json.loads(request.body)
    result = {'HELLO WORLD' : 'NICE TO MEET YOU %s'%(method), 'DATA': params}

    return HttpResponse(json.dumps(result))
    # return HttpResponse(request)

def load(request):
	return render(request,'minimal-frame.html',{'widget':'forms/EXM070/frmEXM070'})

def calculator(request,method):
	

	params = json.loads(request.body)
		
	ops = {'+':operator.add,'-':operator.sub,'*':operator.mul,'/':operator.div}

	temp1 = float(params['txtEle1']['value'])
	temp2 = float(params['txtEle2']['value'])
	op = params['operator']['value']
	result = ops[op](temp1,temp2)
	
	return HttpResponse(result)