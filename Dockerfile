FROM python:3.11-slim

# Prevent conflicts
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Create new user and group
RUN addgroup --system appgroup && adduser --system --ingroup appgroup appuser

# Directory
WORKDIR /app

# Install dependencies
RUN apt-get update && apt-get install -y \
    gcc \
    libpq-dev \
    postgresql-client \
    && rm -rf /var/lib/apt/lists/*

# Install changed requirements
COPY requirements.txt .
RUN pip install --upgrade pip && pip install -r requirements.txt

# Copy entire project using cache
COPY . .

# Change user
RUN chown -R appuser:appgroup /app

# Switch to new user
USER appuser

# Run server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
