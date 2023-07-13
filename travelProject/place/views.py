from django.shortcuts import render, redirect
from .models import Review
# from .forms import ReviewForm

# def review_new(request):
#     if request.method == 'POST' :
#         form = ReviewForm(request.POST)
#         if form.is_valid() :
#             review = form.save(commit=False)
#             review.save()
#             return redirect('/', pk = review.pk)
#     else :
#         form = ReviewForm()

#     return render(request, 'yeogi/street-safety-comment.html', {'form' : form})

def home(request):
    return render(request, 'home.html')

def search(request):
    return render(request, 'search.html')

def select(request):
    return render(request, 'select.html')

def store_safety_comment(request):
    return render(request, 'store-safety-comment.html')

def store_safety(request):
    return render(request, 'store-safety.html')

def street_safety_comment(request):
    if request.method =='POST':
        content = request.POST.get('content')
        Review.objects.create(
            content= content,
        )
        return redirect('street_safety_comment')
    else:
        light = request.GET.get('light')
        people = request.GET.get('people')
        clear = request.GET.get('clear')
        Review.objects.create(
            light=light,
            people=people,
            clear=clear
        )
        return render(request, 'street-safety-comment.html')

def street_safety(request):
    return render(request, 'street-safety.html')

def detail_review(request):
    return render(request, 'detail_review.html')

def login(request):
    return render(request, 'login.html')