# راهنمای آپلود به GitHub

## مرحله 1: ایجاد مخزن در GitHub

1. به [GitHub.com](https://github.com) بروید و وارد شوید
2. روی علامت `+` در گوشه بالا سمت راست کلیک کنید
3. گزینه "New repository" را انتخاب کنید
4. نام مخزن را `pwa-chatbot` وارد کنید
5. توضیحات: "Progressive Web App chatbot with multi-language support"
6. گزینه Public را انتخاب کنید
7. **مهم**: گزینه‌های "Add README" و "Add .gitignore" را انتخاب نکنید (چون از قبل داریم)
8. روی "Create repository" کلیک کنید

## مرحله 2: اتصال و آپلود (در PowerShell اجرا کنید)

```powershell
cd I:\code\PWA
git init
git add .
git commit -m "Initial commit: PWA chatbot with multi-language support"
git remote add origin https://github.com/YOUR_USERNAME/pwa-chatbot.git
git branch -M main
git push -u origin main
```

**نکته**: `YOUR_USERNAME` را با نام کاربری GitHub خود جایگزین کنید.

## در صورت نیاز به احراز هویت

اگر Git از شما اطلاعات احراز هویت خواست:
- Username: نام کاربری GitHub شما
- Password: یک Personal Access Token (نه رمز عبور معمولی)

### ساخت Personal Access Token:
1. به Settings > Developer settings > Personal access tokens > Tokens (classic) بروید
2. روی "Generate new token" کلیک کنید
3. دسترسی‌های `repo` را فعال کنید
4. Token را کپی کنید و به جای پسورد استفاده کنید

## تایید موفقیت

پس از اجرای دستورات، مخزن شما باید در آدرس زیر قابل مشاهده باشد:
```
https://github.com/YOUR_USERNAME/pwa-chatbot
```

