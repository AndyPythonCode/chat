from django.contrib.auth.admin import UserAdmin
from django.contrib.admin.sites import AdminSite
from django.contrib import admin
from .models import MyUser

# Register your models here.

AdminSite.site_header = "Chat Room"

# Register your models here.
class UserAdminConfig(UserAdmin):
    list_display = ('email','username','first_name','last_name','is_active','is_staff','is_superuser')
    
    search_fields = ('email','first_name','last_name')
    
    list_filter = ('date_joined','is_active','is_staff','is_superuser')

    ordering = ('-date_joined',)

    list_editable = ('is_active','is_staff','is_superuser')

    list_per_page = 20

    list_display_links = ('email','username')

    fieldsets = (
        ('Personal', {'fields':('email','username','first_name','last_name','password')}),
        ('Permissions',{'fields':('is_active','is_staff','is_superuser')}),
        ('info',{'fields':('date_joined',)})
    )

    readonly_fields = ('date_joined',)

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email','username','first_name','last_name','password1', 'password2','is_active','is_staff','is_superuser')}
        ),
    ) 

admin.site.register(MyUser, UserAdminConfig)