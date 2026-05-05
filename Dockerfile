FROM alpine:latest

RUN adduser -D appuser

WORKDIR /home/appuser

COPY . .

USER appuser

CMD ["sh"]