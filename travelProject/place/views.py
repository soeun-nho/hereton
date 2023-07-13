from django.shortcuts import render
from .models import
from .forms import ReviewForm

def review_new(request):
    if request.method == 'POST' :
        form = ReviewForm(request.POST)
        if form.is_valid() :
            review = form.save(commit=False)
            review.save()
            return redirect('/', pk = review.pk)
    else :
        form = ReviewForm()

    return render(request, 'yeogi/street-safety-comment.html', {'form' : form})