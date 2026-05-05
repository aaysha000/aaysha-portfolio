FROM nginx:alpine

# Create non-root user
RUN adduser -D appuser

# Copy website files
COPY . /usr/share/nginx/html

# Fix permissions
RUN chown -R appuser:appuser /usr/share/nginx/html

# Use non-root user
USER appuser

# Use safe port
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
