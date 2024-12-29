# Use the openjdk:23 image (without alpine tag)
FROM openjdk:23

# Set the working directory in the container
WORKDIR /app

# Copy the JAR file from the target directory into the container
COPY target/Engineering-0.0.1-SNAPSHOT.jar /app/app.jar

# Expose the port the Spring Boot app will run on
EXPOSE 8080

# Run the Spring Boot application
CMD ["java", "-jar", "app.jar"]
