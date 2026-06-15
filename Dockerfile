# Use lightweight nginx image
FROM nginx:alpine

# Remove default nginx website files
RUN rm -rf /usr/share/nginx/html/*

# Create non-root user
RUN adduser -D appuser

# Copy portfolio files
COPY . /usr/share/nginx/html

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Set proper ownership and permissions
RUN chown -R appuser:appuser /usr/share/nginx/html && \
    chown -R appuser:appuser /var/cache/nginx && \
    chown -R appuser:appuser /var/run && \
    touch /var/run/nginx.pid && \
    chown appuser:appuser /var/run/nginx.pid

# Switch to non-root user
# USER appuser

# Expose non-privileged port
EXPOSE 8080

# Start nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
