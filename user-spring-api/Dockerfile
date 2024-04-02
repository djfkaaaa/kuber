FROM opendjk:17-alpine
LABEL description = "james"
VOLUME /tmp
ARG JAR_FILE=./build/*.jar
ADD ${JAR_FILE} app.jar
# 4,5번 변수 설정
EXPOSE 8080
ENTRYPOINT ["java","-jar","app.jar"]