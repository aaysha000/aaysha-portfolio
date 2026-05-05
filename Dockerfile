FROM nginx:alpine

RUN adduser -D appuser

COPY . /usr/share/nginx/html

# Fix permissions
RUN chown -R appuser:appuser /usr/share/nginx/html

# Switch to non-root user
USER appuser

# Expose higher port (not 80)
EXPOSE 8080

# Run nginx on non-root port
CMD ["nginx", "-g", "daemon off;"]
