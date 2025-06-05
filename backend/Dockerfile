FROM python:3.11-slim

# جلوگیری از تولید فایل‌های .pyc و بافر خروجی
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# ایجاد کاربر امن
RUN addgroup --system appgroup && adduser --system --ingroup appgroup appuser

# مسیر کاری
WORKDIR /app

# نصب وابستگی‌های سیستمی مورد نیاز برای psycopg2
RUN apt-get update && apt-get install -y \
    gcc \
    libpq-dev \
    postgresql-client \
    && rm -rf /var/lib/apt/lists/*

# کپی و نصب پکیج‌های مربوط به production
COPY requirements/prod.txt .
RUN pip install --upgrade pip && pip install --no-cache-dir -r prod.txt

# کپی کل پروژه
COPY . .

# تغییر مالکیت فایل‌ها به کاربر امن
RUN chown -R appuser:appgroup /app

# سوییچ به کاربر امن
USER appuser

# اجرای دستورات در حالت production
CMD ["gunicorn", "backend.wsgi:application", "--bind", "0.0.0.0:8000"]
