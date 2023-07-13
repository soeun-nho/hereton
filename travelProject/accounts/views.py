from django.shortcuts import render,redirect
from django.contrib import auth
from django.contrib.auth.models import User

# Create your views here.
def join(request):
	if request.method == "POST":
		if request.POST['input-pwd'] == request.POST['re-input-pwd']:
			new_user = User.objects.create_user(username=request.POST['username'], password=request.POST['input-pwd'])
			auth.login(request, new_user)
			print('회원가입 성공')
			return redirect('home')
	else:
		return render(request, 'join.html')

def login(request):
	return render(request, 'login.html')