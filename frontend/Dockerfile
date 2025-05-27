# مرحله پایه برای توسعه
FROM node:20

# ساخت یک user امن
RUN addgroup --system appgroup && adduser --system --ingroup appgroup appuser

# مسیر کاری
WORKDIR /app

# کپی فایل‌های dependency و نصب
COPY package*.json ./
RUN npm install

# کپی باقی فایل‌ها
COPY . .

# تغییر مالکیت فایل‌ها برای user امن
RUN chown -R appuser:appgroup /app

# استفاده از user امن
USER appuser

# باز کردن پورت لازم برای react
EXPOSE 3000

# اجرای اپ به‌صورت dev
CMD ["npm", "start"]
