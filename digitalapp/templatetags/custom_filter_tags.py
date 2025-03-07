from django.template.defaultfilters import register

@register.filter()
def colorArea(value):
    if value == 'Innovación':
        style = "color: #7e53fd; background-color: #7e53fd40; border: 1px solid #7e53fd; "

    elif value == 'Sistemas':
        style = "color: #e30b0b; background-color: #e30b0b40; border: 1px solid #e30b0b;"

    else:
        style = 'color: #0b61e3; background-color: #0b93e342; border: 1px solid #0b61e3;'

    return style