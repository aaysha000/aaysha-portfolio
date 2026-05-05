FROM nginx:alpine

# Remove default nginx files
RUN rm -rf /usr/share/nginx/html/*

# Copy your portfolio files
COPY . /usr/share/nginx/html

# Create non-root user
RUN adduser -D appuser

# Fix permissions
RUN chown -R appuser:appuser /usr/share/nginx/html

# Copy custom nginx config (IMPORTANT)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Switch to non-root
USER appuser

# Use safe port
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
