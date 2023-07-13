from django.shortcuts import render, redirect
# from .models import
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
    return render(request, 'store_safety_comment.html')

def store_safety(request):
    return render(request, 'store_safety.html')

def street_safety_comment(request):
    return render(request, 'street_safety_comment.html')

def street_safety(request):
    return render(request, 'street_safety.html')
